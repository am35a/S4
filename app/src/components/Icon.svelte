<script lang="ts">
    $: {
        if(!$$restProps.name)
            $$restProps.name = 'ghost'

        if($$restProps.class)
            $$restProps.class = `ico-${$$restProps.name} ${$$restProps.class}`
        else    
            $$restProps.class = `ico-${$$restProps.name}`

        $$restProps.style = `--ico-image: url(/icons/${$$restProps.name}.svg); ${$$restProps.style}`
        
        delete $$restProps.name
    }
</script>

<span
    class:ico = {true}
    {...$$restProps}
></span>

<style lang="sass" global>
    .ico
        display: inline-block
        min-width: calc(var(--lh) * 1em)
        min-height: calc(var(--lh) * 1em)
        vertical-align: middle
        background-color: currentColor
        -webkit-mask-repeat: no-repeat
        mask-repeat: no-repeat
        -webkit-mask-position: center
        mask-position: center
        -webkit-mask-clip: content-box
        mask-clip: content-box
        -webkit-mask-image: var(--ico-image)
        mask-image: var(--ico-image)
</style>