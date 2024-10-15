<template>
    <div>
        <h3>Bài 2</h3>
        <input v-model="inputValue" type="text" placeholder="Nhập vào đây...">
        <p>Giá trị input: {{ inputValue }}</p>
    </div>
</template>

<script>
export default {
    name: 'Day1Bai2',
    data(){
        return {
            inputValue: ''
        };
    }
}
</script>

<style scoped>
input {
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
}
p {
  font-size: 18px;
}
</style>