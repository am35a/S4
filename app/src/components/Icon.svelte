<script lang="ts">
    let className: string = ''
    let classSize: string = ''
    $: {
        className = $$restProps.name ? `ico-${$$restProps.name}` : ``
        classSize = $$restProps.size ? `ico-${$$restProps.size}` : ``
        let IconClasses = (): string => `ico ${className} ${classSize}`
        $$restProps.class = $$restProps.class ? `${IconClasses()} ${$$restProps.class}` : IconClasses()
        $$restProps.style=`--ico-image: url(/icons/${$$restProps.name}.svg)`
        delete $$restProps.name
        delete $$restProps.size
    }
</script>

<span {...$$restProps}>&nbsp;</span>

<style lang="sass">
    :root
        --ico-size-sm: calc(var(--key-size) * 1.25)
        --ico-size-md: calc(var(--key-size) * 1.5)
        --ico-size-lg: calc(var(--key-size) * 1.75)

    .ico
        display: inline-block
        // width: calc(2.5rem + 2ex + 2.5rem)
        width: calc(0.25em + 2ex + 0.25em)
        // height: calc(2.5rem + 2ex + 2.5rem)
        // height: calc(0.25em + 2ex + 0.25em)
        // width: 1em
        // height: 1em
        // vertical-align: middle
        background-color: currentColor
        mask-repeat: no-repeat
        -webkit-mask-repeat: no-repeat
        mask-position: center
        -webkit-mask-position: center
        mask-clip: content-box
        -webkit-mask-clip: content-box
        mask-image: var(--ico-image)
        -webkit-mask-image: var(--ico-image)
        &-100
            width: 100%
            height: 100%
        &-xs
            width: var(--fs-xs)
            height: var(--fs-xs)
        &-sm
            width: var(--fs-sm)
            height: var(--fs-sm)
            // width: var(--ico-size-sm)
            // height: var(--ico-size-sm) // --sm-size = --key-size * 1 сделать как у font-size
        &-md
            width: var(--fs-md)
            height: var(--fs-md)
            // width: var(--ico-size-md)
            // height: var(--ico-size-md)
        &-lg
            width: var(--fs-lg)
            height: var(--fs-lg)
            // width: var(--ico-size-lg)
            // height: var(--ico-size-lg)
</style>