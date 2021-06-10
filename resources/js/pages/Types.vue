<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Типы заявок'">
        </v-toolbar-title>
        <div v-if="$store.state.types.length > 0">
            <v-container>
                <v-card  v-for="(entry, index) in $store.state.types" :key="index"
                         style="position:relative;"
                        elevation="0">
                    <div v-if="$store.state.auth.user.role === 1024"
                         class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                        <v-btn color="red"
                               fab
                               small
                               @click="delete_id = entry.value"
                               class="mr-3"
                               dark>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                    <h4>{{ entry.text }}</h4>
                </v-card>
            </v-container>
        </div>
        <div v-else>
            <div class="text-center my-3">Типов пока нет</div>
        </div>

        <v-btn class="save-btn"
               v-if="$store.state.auth.user.role === 1024"
               color="success"
               fab
               @click="$router.push('/type/0')"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "Types",
        data: (vm) => {
            return {
                l: 1,
                types: vm.$store.state.types,
                page: 1,
                delete_id: 0,
                show: false
            }
        },
        mounted() {
        },
        methods: {
            getPage() {
                window.axios.get('type').then((r) => {
                    let types = [];
                    r.data.data.forEach((v) => {
                        types.push({
                            value: v.id,
                            text: v.name,
                        })
                    })
                    this.$store.state.types = types;
                    this.types = this.$store.state.types
                })
            },
            delete() {
                if (this.delete_id > 0)
                    window.axios.delete('/type/' + this.delete_id).then((response) => {
                        this.getPage()
                        this.delete_id = 0
                    }).catch((e) => {
                        console.log(e);
                    });
            }
        },
        watch: {
            page() {
                this.getPage();
            },
            delete_id(nv) {
                if (nv > 0) this.delete()
            }
        }
    }
</script>