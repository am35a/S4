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
        color: var(--positive-color)
</style>