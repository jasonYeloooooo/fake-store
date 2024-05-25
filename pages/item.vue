<template>
<NuxtLayout name="tabbar">

  <div class="container">
    <h1 class="title">{{ Item }}</h1>
    <div v-if="product" class="product-info">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" class="image" />
      </div>
      <div class="product-details">
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Title:</strong> {{ product.title }}</p>
        <p><strong>Price:</strong> {{ product.price }}</p>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();
const productId = route.query.id as string;

const pageTitle = ref('Product Detail');

const { data: product } = useFetch(`https://fakestoreapi.com/products/${productId}`);

const goBack = () => {
  navigateTo('/store');
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  flex: 0 0 300px;
  margin-right: 20px;
}

.image {
  max-width: 100%;
  height: auto;
}

.product-details {
  flex: 1;
}

.return-link {
  display: block;
  text-align: center;
  margin-top: 20px;
}
</style>
