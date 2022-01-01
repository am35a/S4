<script lang="ts">
    let className: string = $$restProps.name ? `ico-${$$restProps.name}` : ''
    let classSize: string = $$restProps.size ? `ico-${$$restProps.size}` : ''

    let IconClasses = (): string => `ico ${className} ${classSize}`
    
    $: $$restProps.class = $$restProps.class ? `${$$restProps.class} ${IconClasses()}` : IconClasses()
</script>

<div {...$$restProps} style="--ico-image: url(/icons/{$$restProps.name}.svg)"></div>