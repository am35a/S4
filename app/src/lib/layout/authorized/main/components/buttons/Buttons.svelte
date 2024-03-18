<script>
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let fontSizesObj={
        Default: '',
        xxs: 'fs-xxs',
        xs: 'fs-xs',
        sm: 'fs-sm',
        md: 'fs-md',
        lg: 'fs-lg',
        xl: 'fs-xl',
        xxl: 'fs-xxl',
        xxxl: 'fs-xxxl'
    }
    let fontSize = 'Default'

    let buttonsObj={
        typeObj: {
            Default: '',
            Submit: 'submit',
            Reset: 'reset'
        },
        variantsObj: {
            Default: '',
            Alt: 'alt',
            Outline: 'outline'
        },
        colorsObj: {
            Default: '',
            Primary: '-primary',
            Secondary: '-secondary',
            Info: '-info',
            Success: '-success',
            Warning: '-warning',
            Error: '-error',
        },
        iconObj: {
            Default: 0,
            Both: 1,
            Icon: 2
        }
    }
    let buttonType = 'Default'
    let buttonVariant = 'Default'
    let buttonColor = 'Default'
    let buttonIcon = 'Default'

    let buttonClass = ''
    $: {
        buttonClass = fnButtonClass()

        if (fontSize !== 'Default')
            buttonClass = `${buttonClass} ${fontSizesObj[fontSize]}`

        if (buttonsObj.iconObj[buttonIcon] === 2)
            buttonClass = `${buttonClass} btn-ico`
    
        function fnButtonClass() {
            if (buttonsObj.variantsObj[buttonVariant] && buttonsObj.colorsObj[buttonColor])
                return `btn-${buttonsObj.variantsObj[buttonVariant]}${buttonsObj.colorsObj[buttonColor]}`
            else
                if (buttonsObj.variantsObj[buttonVariant])
                    return `btn-${buttonsObj.variantsObj[buttonVariant]}`
                else
                    if (buttonsObj.colorsObj[buttonColor])
                        return `btn${buttonsObj.colorsObj[buttonColor]}`
                    else
                        return ''    
        }
    }
</script>

<article>
    <h2 id="buttons">Buttons</h2>
    <p>S4 buttons have three variants and seven colors. From these views, you can get any other kind of buttons.</p>

    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Variants</b>
            <div class="display--flex flex-wrap--wrap g-3">
                {#each Object.entries(buttonsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => buttonVariant = key}
                        class="btn btn-{value}"
                        class:active={buttonVariant === key}
                        type="button"
                        disabled={buttonVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap g-3">
                {#each Object.entries(buttonsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => buttonColor = key}
                        class="btn btn{value}"
                        class:active={buttonColor === key}
                        type="button"
                        disabled={buttonColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Icon</b>
            <div class="display--flex flex-wrap--wrap g-3">
                {#each Object.entries(buttonsObj.iconObj) as [key, value]}
                    <Button
                        class="{value === 2 ? 'btn-ico' : ''} {buttonIcon === key ? 'active' : ''}"
                        on:click={() => buttonIcon = key}
                        disabled={buttonIcon === key}
                    >
                        {#if value}
                            <Icon name="ghost"/>
                        {/if}
                        {#if value !== 2}
                            {key}
                        {/if}
                    </Button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Sizes</b>
            <div class="display--flex flex-wrap--wrap g-3 align-items--center">
                {#each Object.entries(fontSizesObj) as [key, value]}
                    <button
                        on:click={() => fontSize = key}
                        class="btn {value}"
                        class:active={fontSize === key}
                        type="button"
                        disabled={fontSize === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Types</b>
            <div class="display--flex flex-wrap--wrap g-3">
                {#each Object.entries(buttonsObj.typeObj) as [key, value]}
                    <button
                        on:click={() => buttonType = key}
                        class="btn btn{value}"
                        class:active={buttonType === key}
                        type="button"
                        disabled={buttonType === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--flex g-4 flex-wrap--wrap justify-content--evenly p-4 background-color--positive border-radius--md">
            <div class="display--grid gtc-2 g-3">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <button class="btn {buttonClass}" type="button">
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <button class="btn {buttonClass} active">
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <button class="btn {buttonClass}" type="button" disabled>
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <button class="btn {buttonClass} active" type="button" disabled>
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
            </div>
        </div>        
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`// Default
<button class="btn ${buttonClass}" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Active
<button class="btn ${buttonClass} active" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Disabled
<button class="btn ${buttonClass}" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Active & disabled
<button class="btn ${buttonClass} active" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
`
                }
            </Precode>
        </div>
        <div class="display--grid g-4">
            <b>Svelte</b>
            <Precode>
                {
`// Import
${buttonsObj.iconObj[buttonIcon] !== 0 ? 'import Button from "component/Button.svelte"' : ''}
import Icon from "component/Icon.svelte"

// Default
<Button ${buttonClass ? 'class="' + buttonClass + '"' : ''} ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''}>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Active
<Button class="${buttonClass} active" ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''}>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Disabled
<Button ${buttonClass ? 'class="' + buttonClass + '"' : ''}  ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''} disabled>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Active & disabled
<Button class="${buttonClass} active"  ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''} disabled>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
`
                }
            </Precode>
        </div>
    </div>
</article>