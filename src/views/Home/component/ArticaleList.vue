<template>
  <div>
    <article-item
      v-for="item in articles"
      :key="item.art_id"
      :article="item"
    ></article-item>
  </div>
</template>

<script>
import { getArticlesAPI } from '@/api'
import ArticleItem from './ArtcleItem.vue'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    id: {
      type: [String, Number]
    }
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      try {
        const { data } = await getArticlesAPI(this.id, +new Date())
        this.articles = data.data.results
      } catch (error) {
        const status = error.response.status
        if (!error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            throw new Error(error.response.data.message)
          }
        }
      }
    }
  }
}
</script>

<style></style>
