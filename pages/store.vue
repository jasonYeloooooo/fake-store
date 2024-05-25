<!-- src/components/Store.vue -->
<template>
<NuxtLayout name="tabbar">
  <div class="store">
    <div 
      v-for="product in products" 
      :key="product.id" 
      class="product" 
      @click="goToProduct(product.id)"
    >
      <img :src="product.image" :alt="product.title" class="product-image"/>
      <div class="product-title">{{ product.title }}</div>
    </div>
  </div>
</NuxtLayout>
</template>

<script setup lang='ts'>

const { products, fetchProducts } = useProduct();
const route = useRoute()

  if (products.value.length === 0) {
    fetchProducts();
  }
const goToProduct = (productId: number) => {
  navigateTo(`/item?id=${productId}`);
};
</script>

<style>
.store {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.product {
  display: flex;
  flex-direction: column;
  margin-top: 20px ;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between; 
  cursor: pointer;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.2s;
  width: 200px; 
  height: 300px; 
  box-sizing: border-box; 
}
.product:hover {
  transform: scale(1.05);
}
.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover; 
}
.product-title {
  margin-top: 8px;
  text-align: center;
  flex-grow: 1; 
  display: flex;
  align-items: center;
  justify-content: center; 
}
</style>
