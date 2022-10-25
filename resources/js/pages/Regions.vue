<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Список регионов'">
        </v-toolbar-title>
        <v-card class="d-flex flex-column justify-space-between mb-6" flat tile>
            <AppDataTable
                v-show=" !notFound"
                :headers="headers.regions"
                :showSelect="false"
                :fixedCol="false"
                :editItem="showItem"
                :emptyItemText="'-'"
                :itemsUrl="regionsItemsUrl"
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
        name: 'Regions',
        components: {
            AppDataTable
        },
        data: (vm) => {
            return {
                loading: false,
                notFound: false,
                headers: {
                    regions: [
                        { value: 'code', text: 'Код региона' },
                        { value: 'name', text: 'Регион', link: true, id: 'id' },
                        { value: 'districts_count', text: 'Активных районов'},
                    ],
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
            regionsItemsUrl() {
                return '/district/region'
            },
        },
        methods: {
            showItem(id) {
                this.$router.push({ name: 'districts', params: { region: id,id:0 }, query:{level:0} })
            },
        },
    }
</script>

<style scoped></style>
