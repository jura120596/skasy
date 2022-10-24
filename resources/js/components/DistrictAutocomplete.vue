<template>

    <v-autocomplete
        v-model="district"
        @input="$emit('input', $event ? $event.id : $event)"
        :items="entries"
        :loading="isLoading"
        :search-input.sync="search"
        hide-no-data
        clearable
        item-text="name"
        item-value="id"
        return-object
        autocomplete="chrome-off"
        v-bind="$attrs"
    ></v-autocomplete>
</template>

<script>
    export default {
        name: "DistrictAutocomplete",
        props: {
            level: {
                type: String,
                default: '1',
            },
            district_id: {
                type: Number,
                default: 0,
            },
        },
        updated() {
            console.log(JSON.stringify(this.district))
        },
        data: (vm) => {
            console.log({id: vm.$attrs.value})
            return ({
                entries: [],
                isLoading: false,
                district: {id: vm.$attrs.value},
                search: '',
                last: '',
                t: null,
            })
        },
        watch: {
            value(id) {
                this.district = {id}
            },
            district_id() {
                this.search = null;
                this.district = null;
                this.$emit('input', null)
            },
            search(val) {
                if (this.entries.length > 0 && this.last && val === this.last) return;
                if (this.t != null) clearTimeout(this.t);
                this.t = setTimeout((...args) => {
                    this.isLoading = true;
                    window.axios.get('/district?' + (new URLSearchParams({
                        name: args[0],
                        level: this.level,
                        per_page: -1,
                        ...(this.district_id ? {parent_district_id: this.district_id} : {})
                    }).toString()),)
                        .then(res => {
                            this.count = res.data.total;
                            this.entries = res.data.data;
                            this.last = name;
                        })
                        .catch(err => {
                            console.log(err)
                        })
                        .finally(() => (this.isLoading = false))
                }, 1000, [val + '']);
            },
        }
    }
</script>

<style scoped>

</style>
