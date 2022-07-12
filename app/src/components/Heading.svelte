<script lang="ts">
    let level: number = undefined
    let className: string[] = []
    $: {
        level = undefined
        className = $$restProps.class.split(' ')

        if (className.length)
            for (let nIndex: number = className.length - 1; nIndex >= 0; nIndex--) {
                level = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(className[nIndex])
                if (level++ !== -1) {
                    $$restProps['role'] = 'heading'
                    $$restProps['aria-label'] = level
                    break
                }
            }
    }
</script>
<div {...$$restProps}><slot></slot></div>