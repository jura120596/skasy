<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="title">
        </v-toolbar-title>
        <router-link
            v-if="canAddDistrict"
            :to="'/regions/' + $route.params.region + '/edit?level=' + level+'&parent_district_id=' + $route.params.id"
            class="ml-4">Добавить +</router-link>
        <v-card class="d-flex flex-column justify-space-between mb-6" flat tile>
            <AppDataTable
                v-show=" !notFound"
                :headers="headers.regions"
                :showSelect="false"
                :fixedCol="false"
                :filter="filter"
                :editItem="showItem"
                :emptyItemText="'-'"
                :itemsUrl="districtsItemsUrl"
            >
            </AppDataTable>
            <template v-if="notFound">
                <v-alert style="margin-top: 20px" colored-border type="info" elevation="2">
                    По Вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
                </v-alert>
            </template>
        </v-card>
    </v-container>
</template>


<script>
    import AppDataTable from "../components/AppDataTable";
    export default {
        name: 'Districts',
        components: {
            AppDataTable
        },
        data: (vm) => {
            return {
                level: Number.parseInt(vm.$route.query.level),
                loading: false,
                notFound: false,
                filter: {
                    region_id: vm.$route.params.region,
                },
                vm,
            }
        },
        watch: {
            loading(a, b) {
                if (!a && b) {
                    if (this.filter.name.length > 0 && this.courts.length == 0) {
                        this.notFound = true
                    } else {
                        this.notFound = false
                    }
                }
            },
        },
        async created() {
        },
        computed: {
            canAddDistrict() {
                if (this.$route.params.id+'' === '0') {
                    return this.$store.state.auth.user.district_id === null;
                } else
                    return this.$store.state.auth.user.district_id === null && this.level < 2
                        || this.$store.state.auth.user.district_id+'' === this.$route.params.id+'';
            },
            headers() {
                return {
                    regions: [
                        { value: 'name', text: this.label, link:this.level < 2, id: 'id' },
                    ].concat(this.level+'' == '2' ? [] : [
                        {value: 'childs_count', text: 'Количество административных районов'}
                    ]),
                };
            },
            districtsItemsUrl() {
                return '/district?level=' + this.level+'&parent_district_id=' + this.$route.params.id
            },
            label() {
                switch(this.level){
                    case 2:
                    case '2': return 'Населенный пункт';
                    case 1:
                    case '1': return 'Сельское поселение';
                    case 0:
                    case '0': return 'Муниципалитет';
                    default: return 'Район';
                }
            },
            title() {
                switch(this.level){
                    case 2:
                    case '2': return 'Список населенных пунктов';
                    case 1:
                    case '1': return 'Список сельских поселений';
                    case 0: case '0': return 'Список муниципалитетов';
                    default: return 'Список районов';
                }
            }
        },
        methods: {
            showItem(id) {
                let l = this.level;
                console.log(l)
                this.$router.push({ name: 'districts', params: { region:this.$route.params.region, id: id},
                    query: {level: Number.isInteger(l) ? l + 1 : 1 }
                })
            },
        },
    }
</script>

<style scoped></style>
