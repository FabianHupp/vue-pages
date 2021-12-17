<template>
    <div class="heading-container">
        <div class="heading-line"></div>
        <p class="heading-text">{{this.title}}</p>
    </div>
</template>

<script>

export default {
    name: "SectionHeading",
    props: {
        title: String,
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.heading-container {
    display: flex;
    align-items: center;
    padding: 40px 0 20px 0;
    margin: 0 0 0 0;
}

.heading-line {
    background: black;
    width: 64px;
    height: 3px;
    margin: 0 18px 0 6px;
}

.heading-text {
    margin: 0;
    padding: 0;
    font-size: 1.1vw;
    font-weight: bold;
}
</style>
