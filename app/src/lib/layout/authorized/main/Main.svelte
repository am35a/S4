<script lang="ts">
    import Css from '../../laborer/body/ui/css/Css.svelte'

</script>

<main
    {...$$restProps}
    class="o-auto"
>
    <Css />
    <!--article>
        ...
    </article-->
</main>

<style lang="sass">
    main
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>