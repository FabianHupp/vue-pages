<template>
    <a class="custom-button rounded" :class="[bgColor, textColor]" href="https://www.basketball-bund.net/index.jsp?Action=100&Verband=9" target="_blank">
        <b-icon icon="clipboard-data" class="bt-icon"></b-icon>
        {{btnText}}
    </a>
</template>

<script>

export default {
    props: {
        btnText: String,
        bgColor: String,
        btIcon: String,
        textColor: String,
        bLink: String
    }
}
</script>

<style scoped>
.custom-button {
    position: relative;
    width: fit-content;
    text-decoration: solid;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border: none;
    padding: 10px 20px 10px 20px;
    top: 0;
    transition: top 0.12s ease-in-out, box-shadow 0.12s ease-in-out;
}

.custom-button:hover {
    top: -1px;
    box-shadow: 0 4px 6px rgb(50 50 93 / 20%), 0 1px 3px rgb(0 0 0 / 14%);
}

.bt-icon {
    margin-right: 10px;
    font-size: 14px;
}
</style>