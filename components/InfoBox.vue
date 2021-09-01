<template>
    <div class="infoBox">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .infoBox {
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        padding: 20px;
        background-color: #2EC997;
        border-radius: 10px;
    }
</style>