<script lang="ts">
    let className: string = $$restProps.name ? `ico-${$$restProps.name}` : ''
    let classSize: string = $$restProps.size ? `ico-${$$restProps.size}` : ''

    let IconClasses = (): string => `ico ${className} ${classSize}`
    
    $$restProps.class = $$restProps.class ? `${$$restProps.class} ${IconClasses()}` : IconClasses()
</script>

<div {...$$restProps} style="--ico-image: url(/icons/{$$restProps.name}.svg)"></div>




<!-- <script lang="ts">
    export let name: string = undefined
    export let size: string = undefined
    function IconClasses(): string {
        let className: string = name ? `ico-${name}` : ''
        let classSize: string = size ? `ico-${size}` : ''
        return `ico ${className} ${classSize}`
    }
</script>

<div class="{IconClasses()}" style="--ico-image: url(/icons/{name}.svg)"></div> -->