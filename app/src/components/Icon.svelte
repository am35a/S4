<script lang="ts">
    let className: string = ''
    // let classSize: string = ''
    $: {
        className = $$restProps.name ? `ico-${$$restProps.name}` : ``
        // classSize = $$restProps.size ? `ico-${$$restProps.size}` : ``
        // let IconClasses = (): string => `ico ${className} ${classSize}`
        let IconClasses = (): string => `ico ${className}`
        $$restProps.class = $$restProps.class ? `${IconClasses()} ${$$restProps.class}` : IconClasses()
        $$restProps.style=`--ico-image: url(/icons/${$$restProps.name}.svg)`
        delete $$restProps.name
        delete $$restProps.size
    }
</script>

<span {...$$restProps}>&nbsp;</span> <!-- &nbsp; -->

<style lang="sass">
    .ico
        display: inline-block
        min-width: calc(0.25em + 2ex + 0.25em)
        min-height: calc(0.25em + 2ex + 0.25em)
        background-color: currentColor
        mask-repeat: no-repeat
        -webkit-mask-repeat: no-repeat
        mask-position: center
        -webkit-mask-position: center
        mask-clip: content-box
        -webkit-mask-clip: content-box
        mask-image: var(--ico-image)
        -webkit-mask-image: var(--ico-image)
</style>