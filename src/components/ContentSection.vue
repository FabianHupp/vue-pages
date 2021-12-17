<template>
    <div class="section" :class="[color, skewed]">
        <b-container class="section-p-lg" :class="deSkew">
            <b-row align-h="center">
                <b-col cols="11" md="10">
                    <slot></slot>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    props: {
        color: String,
        skewed: String,
    },
    computed: {
        deSkew: function() {
            return (this.skewed != '' && this.skewed != null) ? 'de-skew' : '';
        }
    }
}
</script>

<style scoped>
.section {
    position: relative;
    width: 100%;
}

.section-p-lg {
    padding: 96px 0 96px 0;
}

.section-b-grey {
    background-color: #f4f5f7!important;
}

.shape-skew {
    z-index: -1;
    transform: skewY(-8deg);
    transform-origin: 0;
}

.de-skew {
    transform: skewY(8deg) !important;
}
</style>