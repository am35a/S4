<script lang="ts">
    import Icon from '../../../../../../components/Icon.svelte'

</script>

<div class="item">
    <div class="hover"></div>
    <div class="active"></div>
    <div class="icon">
        <Icon name="home" size="sm"/>
    </div>
    <div class="title">home</div>
</div>

<style lang="sass">
    .item
        display: grid
        height: var(--layout-aside-item-height)
        color: var(--positive-color)
        .hover
            grid-column: 1/-1
            grid-row: 1/-1
        .active
            grid-column: 1/-1
            grid-row: 1/-1
        .icon
            grid-column: 1/-1
            grid-row: 1/-1
        .title
            grid-column: 1/-1
            grid-row: 1/-1
</style>