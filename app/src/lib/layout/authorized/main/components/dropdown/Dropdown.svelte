<script>
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import Dropdown from 'component/Dropdown.svelte'
    import Precode from 'component/Precode.svelte'

    let dropdownObj={
        positionObj: [
            'right top',
            'right center',
            'right bottom',
            'bottom right',
            'bottom center',
            'bottom left',
            'left bottom',
            'left center',
            'left top',
            'top left',
            'top center',
            'top right',
            'center center'
        ]
    }
    let contentPosition = dropdownObj.positionObj[6]

    let buttonsObj={
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
    let buttonVariant = 'Default'
    let buttonColor = 'Default'
    let buttonIcon = 'Default'

    let buttonClass = ''
    $: {
        buttonClass = fnButtonClass()

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
    <h2 id="dropdown">Dropdown</h2>
    <p>
        ...
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Variants</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Icon</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
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
        <div class="display--grid gap--md">
            <b>Position</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each dropdownObj.positionObj as position, i}
                    <Button
                        on:click="{() => contentPosition = dropdownObj.positionObj[i]}"
                        class="btn-outline {contentPosition === position ? 'active' : ''}"
                        disabled={contentPosition === position}
                    >{position}</Button>
                {/each}
            </div>
        </div>
        <div class="display--flex gap--md padding--md background-color--positive border-radius--md" style="height: 10em;">
            <div class="display--grid gap--sm margin--auto">
                <Dropdown class="drpdwn-hover">
                    <Button 
                        slot="btn"
                        class="{buttonClass} open"
                        data-position={contentPosition}
                    >
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <Icon name="ghost"/>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Dropdown
                        {/if}
                    </Button>
                    <div
                        slot="content"
                        class="display--grid gap--xs width padding--xs background-color--positive border-radius--md border-style--solid border-color--negative-30"
                        style="--width: 16em"
                    >
                        Position:
                        <div>{contentPosition}</div>
                    </div>
                </Dropdown>
            </div>
        </div>
    </div>
        <!--div>
            <div class="drpdwn-hover">
                <button
                    class="btn btn-alt"
                    data-position="bottom right"
                >
                    html
                </button>
                <div
                    class="drp-content"
                >
                    <div
                        class="display--grid gap--xs width padding--xs background-color--positive border-radius--md border-style--solid border-color--negative-30"
                        style="--width: 16em"
                    >
                        <button class="btn justify-content--start padding-x--xxs" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                        <button class="btn justify-content--start padding-x--xxs" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                        <button class="btn justify-content--start padding-x--xxs" type="reset">
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/palette.svg);">&nbsp;</span>
                            <span class="truncate">Color palette</span>
                        </button>
                    </div>
                </div>
            </div>
        </div-->

</article>
