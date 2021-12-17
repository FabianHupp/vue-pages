<template>
    <b-row class="my-2 px-0">
        <b-col cols="auto" class="m-0 p-0">
            <div class="li-circle shadow-sm" :class="color"></div>
        </b-col>
        <b-col cols="auto" class="col-legend-text">
             <h6 class="ptext legend-text">{{label}}</h6>
        </b-col>
    </b-row>
</template>

<script>

export default {
    props: {
        color: String,
        label: String,

    },
}
</script>

<style scoped>
.li-circle {
    position: relative;
    border-radius: 50%;
    width: 16px;
    height: 16px;
}

.li-purple {
    border: 2px solid #01324c;
}

.li-orange{
    background-color: #dd6b20;
}

.li-green {
    background-color: #01324c;
}

.legend-text {
    text-align: left;
    padding: 0px 0 0 4px;
    font-size: 15px !important;
}

.col-legend-text {
    margin: 0;
    padding: 0 25px 0 3px;
    color: #525f7f;
}
</style>