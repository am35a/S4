<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Precode from "src/components/Precode.svelte"
    import Button from "src/components/Button.svelte"

    let iconSize:string = ''
    let iconSizeArr = {
        auto: '',
        small: 'sm',
        medium: 'md',
        large: 'lg',
        full: '100'
    }
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Icons</div>
    <div class="d-grid cols-2 p:cols-1">
        <p>
            <span>Lightweight <Icon name="ghost"/> responsive vector icons with cache available.</span>
        </p>
        <div class="d-grid g-2 p-2 bg-positive rounded-md">
            <div style="min-height: calc(var(--key-size) * 10)">
                <Icon name="ghost" size={iconSize}/>
            </div>
            <div class="d-inline-flex flex-nowrap g-2">
                {#each Object.entries(iconSizeArr) as [key, value]}
                    <Button
                        class="btn-secondary {iconSize === value ? 'active' : ''}"
                        on:click = {() => iconSize = value}
                        disabled={iconSize === value}
                    >{key}</Button>
                {/each}
            </div>
            <Precode>
                {
`<Icon name="ghost" ${iconSize ? `size="${iconSize}" ` : ``}/>

// It is valid syntax of Icon component but not recommended for use
<Icon ${iconSize ? `class="ico-${iconSize}" ` : ``}name="ghost" />
<Icon class="ico-ghost${iconSize ? ` ico-${iconSize}` : ``}" />`
                }
            </Precode>
        </div>
    </div>
</section>
