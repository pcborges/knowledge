<template>
  <div class="category-admin">
    <b-form>
      <input type="hidden" id="category-id" v-model="category.id">
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Categoria:" label-for="category-name">
            <b-form-input
              id="category-name"
              type="text"
              v-model="category.name"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome da Categoria..."
            />
          </b-form-group>
          <b-form-group label="Categoria Pai:" label-for="category-parentId">
            <b-form-select
              v-if="mode === 'save'"
              id="category-parentId"
              :options="categories"
              v-model="category.parentId"
            />
            <b-form-input
              v-else
              id="category-parentId"
              type="text"
              v-model="category.path"
              readonly
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
          <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr>
    <b-table striped hover :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "CategoryAdmin",
  data: function() {
    return {
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ação" }
      ]
    };
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then(res => {
        // this.categories = res.data;
        this.categories = res.data.map(category => {
          return { ...category, value: category.id, text: category.path };
        });
      });
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    },
    reset() {
      (this.mode = "save"), (this.category = {}), this.loadCategories();
    },
    save() {
            const method = this.category.id ? 'put' : 'post'
            const id = this.category.id ? `/${this.category.id}` : ''
            axios[method](`${baseApiUrl}/categories${id}`, this.category)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
    remove() {
      const url = `${baseApiUrl}/categories/${this.category.id}`;
      axios
        .delete(url)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    }
  },
  mounted() {
    this.loadCategories();
  }
};
</script>

<style>
h1 {
  font-size: 1.2rem;
}
</style>