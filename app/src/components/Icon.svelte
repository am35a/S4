<script lang="ts">
    export let name: string = undefined;
    export let size: string = undefined;

    function IconClasses(): string {
        let className: string = name ? `ico-${name}` : ''
        let classSize: string = size ? `ico-${size}` : ''

        return `ico ${className} ${classSize}`
    }
    
    $$restProps.class = $$restProps.class ? `${$$restProps.class} ${IconClasses()}` : IconClasses()
</script>

<div {...$$restProps} style="--ico-image: url(/icons/{name}.svg)"></div>