<template>
    <v-container >
        <slot name="body.prepend"/>
        <v-row
            style="flex-wrap: nowrap;">
            <v-col v-if="withFixed && getFixedHeaders(false).length>0"
                   class="fixedColumn flex-grow-0 flex-shrink-0">
                <v-data-table :headers="getFixedHeaders(false)" :items="tableItems" item-key="id" v-model="selected"
                              :page.sync="tableFilter.page"
                              :items-per-page="tableFilter.per_page"
                              @page-count="pageCount = $event"
                              :server-items-length="total"
                              hide-default-footer
                              v-on:input="$emit('input')"
                              :options.sync="tableOptions"
                              :show-select="withSelect" style="width: max-content"
                              :no-data-text="'Нет данных'"
                              :no-results-text="'Нет данных'"
                              ref="fixedTable"
                              :loading="loading"
                              loading-text="Загрузка... Пожалуйста, подождите"
                >
                    <template v-slot:header.settings="{header}">
                        <v-container class="d-flex align-center">
                            <slot name="header-settings-menu" v-bind:header="header"></slot>
                        </v-container>
                    </template>
                    <template v-slot:item.settings="{item}">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-card-text  :ref="'settingsrow'+item.id" class="ma-0 pa-0 d-flex flex-column justify-center" >
                                    <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                        icon>
                                        <v-icon small>mdi-menu</v-icon>
                                    </v-btn>
                                </v-card-text>
                            </template>
                            <slot name="item-settings-menu" v-bind:item="item"></slot>
                        </v-menu>
                    </template>
                    <template v-slot:item.mark="{item}">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    v-if="item.color"
                                    v-bind="attrs"
                                    v-on="on"
                                    small
                                    :style="{color: item.color.color}"
                                >mdi-checkbox-blank-circle</v-icon>
                            </template>
                            <span>{{item.color.text}} (Последнее обновление:{{item.finished_at}})</span>
                        </v-tooltip>
                        {{item.mark}}
                    </template>
                </v-data-table>

            </v-col>
            <v-col style="overflow:hidden;display: block;position:relative; "
                   class="flex-grow-1 flex-shrink-1">
                <div v-if="tableItems && tableItems.length > 0 && showScroll">
                    <v-chip class="app-table-scroll-left" @mouseover="onScrollLeft" @mouseout="scrollRun = false;"/>
                    <v-chip class="app-table-scroll-left app-table-scroll-right"  @mouseover="onScrollRight"  @mouseout="scrollRun = false;"/>
                </div>
                <v-data-table :headers="withFixed ? getFixedHeaders(true) : tableHeaders" :items="tableItems"
                              :page.sync="tableFilter.page"
                              :items-per-page="tableFilter.per_page"
                              @page-count="pageCount = $event"
                              :options.sync="tableOptions"
                              :server-items-length="total"
                              :no-data-text="withSelect ? '' : 'Нет данных'"
                              :no-results-text="withSelect ? '' : 'Нет данных'"
                              ref="table"
                              :loading="loading"
                              loading-text="Загрузка... Пожалуйста, подождите"
                              hide-default-footer>
                    <template slot="item" slot-scope="props">
                        <tr :ref="'row'+props.item.id">
                            <td v-for="(item, index) in props.headers" style="max-width: 500px">
                                <div v-if="item.link === true">
                                    <slot name="link_item" v-bind="{props, item}">
                                        <a @click="tableEditItem(props.item[item.id === undefined ? 'id' : item.id], props.item, item.value)" >{{props.item[item.value]}}</a>
                                    </slot>
                                </div>
                                <div v-else-if="item.hidden === true && (props.item[item.value] || props.item.hidden_prepend)">
                                    <p v-if="props.item.hidden_prepend">{{props.item.hidden_prepend}}</p>
                                    <p v-if="!props.item.hidden">{{props.item[item.value]}}</p>
                                    <a v-if="props.item[item.value]" @click="props.item.hidden = !props.item.hidden">
                                        {{props.item.hidden ? 'Показать текст' : 'Скрыть текст'}}
                                    </a>
                                </div>
                                <div v-else>
                                    {{props.item[item.value] !== undefined && props.item[item.value] !== null ? props.item[item.value] : emptyText}}
                                </div>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <slot name="body.append"/>
        <slot name="body.pagination">
            <div class=" d-flex pt-2">
                <v-pagination
                    v-model="tableFilter.page"
                    :length="pageCount"
                    :total-visible="7"
                ></v-pagination>
                <v-spacer></v-spacer>
                <v-select
                    :value="tableFilter.per_page"
                    @change="tableFilter.per_page = parseInt($event, 10) ? parseInt($event, 10) : 1"
                    :items="[20,40,60,80,100]"
                    label="Показывать по:"
                    style="max-width: 150px"
                ></v-select>
            </div>
        </slot>
    </v-container>
</template>
<script>
    import _ from 'lodash';
    import Axios from '@/utils/axios';
    export default {
        name: 'AppDataTable',
        props: {
            headers: Array,
            itemsUrl: {
                type:String,
                default: null,
            },
            items: {
                type: Array,
                default: function() {
                    return undefined;
                }
            },
            showSelect: Boolean,
            fixedCol: Boolean,
            filter: Object,
            service: {
                type:Object,
                default: () => ({})
            },
            toItem: {
                type: Function,
                default:  (item) => {return item;},
            },
            editItem: {
                type: Function,
                default: (id) => {},
            },
            emptyItemText: {
                type:String,
                default: '',
            },
        },
        data: function () {
            return {
                pageCount: 0,
                tableItems: this.items,
                selected: [],
                total: 0,
                tableHeaders: this.headers,
                withSelect : this.showSelect,
                withFixed: this.fixedCol,
                tableFilter: {
                    ...this.filter,
                    page: 1,
                    per_page: 20,
                    sortBy: 'id',
                    sortDesc : false,
                },
                scrollRun: false,
                showScroll: false,
                tableOptions: {},
                tableEditItem: this.editItem,
                emptyText: this.emptyItemText,
                loading: false,
            };
        },
        methods: {
            getFixedColumnLeft (indx = this.headers.length) {
                return this.headers
                    .filter((header, i) => i < indx && header.fixed === true)
                    .reduce((currentValue, header) => currentValue + (parseInt(header.width) || 0), 0)
            },
            getFixedHeaders(reverse) {
                return this.headers
                    .filter((header) => {
                        return !reverse ? header.fixed === true : !(header.fixed !== undefined && header.fixed !== false)
                    });
            },
            async loadItems() {
                if (this.items !== undefined) {
                    this.total = this.items.length;
                    this.pageCount = Math.floor(this.total / this.tableFilter.per_page)
                        + (this.total === this.tableFilter.per_page ? 0 : 1);
                    this.tableViewNormalize()
                    return;
                }
                if  (this.itemsUrl) {
                    let params = this.service && this.service.prepareParams
                        ? this.service.prepareParams(this.tableFilter)
                        : this.tableFilter;
                    this.loading = true
                    this.$emit('onLoading')
                    Axios.get(this.itemsUrl, {params})
                        .then((response) => {
                            this.tableItems = response.data.data.map(this.toItem);
                            this.total = response.data.total;
                            this.pageCount = response.data.last_page;
                            this.tableViewNormalize()
                            this.loading = false
                            this.$emit('onLoad', response.data.data)
                        })
                        .catch((e) => {
                            console.log(e);
                            this.loading = false
                            this.$emit('onLoad')
                        });
                    return;
                }
                this.loading = true
                this.$emit('onLoading')
                this.service.getAll(this.tableFilter)
                    .then((response) => {
                        this.tableItems = response.data.data.map(this.toItem);
                        this.total = response.data.total;
                        this.pageCount = response.data.last_page;
                        this.tableViewNormalize()
                        this.loading = false
                        this.$emit('onLoad', response.data.data)
                    })
                    .catch((e) => {
                        console.log(e);
                        this.loading = false
                        this.$emit('onLoad')
                    });
            },
            scrollTo(element, scrollPixels, duration) {
                const scrollPos = element.scrollLeft;
                // Condition to check if scrolling is required
                if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)))
                {
                    // Get the start timestamp
                    const startTime =
                        "now" in window.performance
                            ? performance.now()
                            : new Date().getTime();
                    let scroll = (timestamp)  => {
                        //Calculate the timeelapsed
                        const timeElapsed = timestamp - startTime;
                        //Calculate progress
                        const progress = duration ? Math.min(timeElapsed / duration, 1) : null;
                        //Set the scrolleft
                        element.scrollLeft = (progress
                            ? scrollPos + scrollPixels * progress :
                            element.scrollLeft + 10 * scrollPixels /(Math.abs(scrollPixels)));
                        //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
                        if (this.scrollRun) {
                            //Request for animation
                            window.requestAnimationFrame(scroll);
                        } else {
                            return;
                        }
                    }
                    //Call requestAnimationFrame on scroll function first time
                    window.requestAnimationFrame(scroll);
                }
            },
            onScrollLeft() {
                this.scrollRun = true;
                this.scrollTo(this.$refs.table.$el.childNodes[0], -this.$refs.table.$el.childNodes[0].scrollWidth);
            },
            onScrollRight() {
                this.scrollRun = true;
                this.scrollTo(this.$refs.table.$el.childNodes[0], this.$refs.table.$el.childNodes[0].scrollWidth);
            },
            tableViewNormalize() {
                if (this.$refs.fixedTable) Object.keys(this.$refs).forEach((v) => {
                    if (v.search('row') === 0 && this.$refs['settings'+ v]) {
                        this.$refs['settings'+ v].style.height = (this.$refs[v].clientHeight - 1)+'px'; //bootom border on every table row
                    }
                })
            }
        },
        created: function() {
            this.debouncedLoadItems = _.debounce(this.loadItems, 500)
        },
        watch: {
            tableFilter: {
                handler () {
                    this.debouncedLoadItems()
                },
                deep: true
            },
            tableOptions: {
                handler() {
                    if (this.tableOptions.sortBy.length === 1) {
                        this.tableFilter.sortBy = this.tableOptions.sortBy[0];
                    }
                    if (this.tableOptions.sortDesc.length === 1) {
                        this.tableFilter.sortDesc = this.tableOptions.sortDesc[0];
                    }
                    const { sortBy, sortDesc } = this.tableFilter
                    this.$emit('onSort', { sortBy, sortDesc })
                },
                deep: true,
            },
            tableItems: {
                handler() {
                    setTimeout(() =>  {
                        this.showScroll = this.$refs.table.$el.childNodes[0].scrollWidth > this.$refs.table.$el.scrollWidth;
                    }, 500);
                },
                deep:true,
            },
            filter: {
                handler(value) {
                    if (value) {
                        this.tableFilter = {...this.tableFilter, ...this.filter};
                        this.tableFilter.page = 1;
                    }
                },
                deep:true
            },
            items: {
                handler(value) {
                    this.tableItems = value;
                },
                deep: true,
            }
        },
        mounted() {
            this.loadItems()
            this.$watch(
                () => {
                    return this.$refs.table.items
                },
                (val) => {
                    this.tableViewNormalize()
                }
            )
        },
    }
</script>

<style>
    table {
        width: max-content !important;
    }
    th.fixedColumn, td.fixedColumn {
        position: absolute;
        display: flex;
        text-align: center;
    }
    .fixedColumn   th:last-child{
        border-right: 1px solid;
    }
    div > .fixedColumn:nth-child(1) {
        padding-right: 0;
    }
    div > .col:nth-child(2) {
        padding-left: 0;
    }
</style>
