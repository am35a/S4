<script lang="ts">
    import Precode from 'component/Precode.svelte'

    import Grow from './grow/Grow.svelte'
    import Shrink from './shrink/Shrink.svelte'
    import Basis from './basis/Basis.svelte'
    import Mixings from './mixings/Mixings.svelte'
</script>

<section class="d-grid g-2">
    <h3 id="flexFlex">Flex</h3>
    <p>
        The <b>f</b> class do nothing to items into clear flex container and set default parameters for modificated items. <Precode class="py-0 px-1 d-inline">flex: 0 1 auto;</Precode>
    </p>
    <Grow />
    <Shrink />
    <Basis />
    <Mixings />
</section>