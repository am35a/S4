<script lang="ts">
    import Icon from "component/Icon.svelte"
    import Precode from "component/Precode.svelte"
    import Button from "component/Button.svelte"

    let iconSize:string = ''
    let iconSizeArr = {
        'auto': '',
        'xx-small': 'fs-xxs',
        'x-small': 'fs-xs',
        'small': 'fs-sm',
        'medium': 'fs-md',
        'large': 'fs-lg',
        'x-large': 'fs-xl',
        'xx-large': 'fs-xxl',
        'xxx-large': 'fs-xxxl',
        'full': 'w-100 h-100'
    }
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Icons</div>
    <div class="d-grid cols-2 p:cols-1">
        <p>
            Lightweight <Icon name="ghost"/> responsive vector icons with cache available.
            <br>
            The  icon sizes directly depend on the font size and the container in which the icon is placed.            
        </p>
        <div class="d-grid g-2 p-2 bg-positive rounded-md">
            <div style="min-height: 10em">
                <Icon class={iconSize} name="ghost"/>
            </div>
            <div class="d-inline-flex flex-wrap g-2">
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
<Icon ${iconSize ? `class="${iconSize}" ` : ``}name="ghost" />
<Icon class="ico-ghost${iconSize ? ` ${iconSize}` : ``}" />`
                }
            </Precode>
        </div>
    </div>
</section>
