<script lang="ts">

</script>

<nav
    {...$$restProps}
>
    <!-- class="p-sticky t-0 d-grid p-2 me-auto" -->
    <div
        class="d-grid p-2 bgc-positive br bs-xs ai-start border border-negative-30"
    >
        <button class="btn jc-start px-1" type="reset">
            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
            Button
        </button>
    </div>
</nav>

<style lang="sass">
    nav
        position: relative
        grid-column: 1/-1
        grid-row: 1/-1
</style>