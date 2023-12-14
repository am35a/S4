<script lang="ts">
    import Css from '../../laborer/body/ui/css/Css.svelte'

</script>

<main
    {...$$restProps}
    class="p-2 o-auto"
>
    <Css />
    <!--article>
        ...
    </article-->
</main>

<style lang="sass">
    main
        grid-column: 1/-1
        grid-row: 1/-1
</style>