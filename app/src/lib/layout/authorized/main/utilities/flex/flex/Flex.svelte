<script>
    import Precode from 'component/Precode.svelte'
    
    import Grow from './grow/Grow.svelte'
    import Shrink from './shrink/Shrink.svelte'
    import Basis from './basis/Basis.svelte'
    import Mixings from './mixings/Mixings.svelte'
</script>

<section>
    <h3 id="flexFlex">Flex</h3>
    <p>
        The <b>fx</b> class do nothing with items into clear flex container and reset one more time default
        parameters for modification items. <Precode class="py-0 px-1 d-inline">flex: 0 1 auto;</Precode>
        There are variables can be used to control the fx class <b>--fxg</b>, <b>--fxs</b> and <b>--fxb</b>.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-info js-start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! All variables <b>--fxg</b>, <b>--fxs</b> and <b>--fxb</b> are adaptive. The list of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
    </div>

    <Grow />
    <Shrink />
    <Basis />
    <Mixings />
</section>