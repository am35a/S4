<script>
    // import Icon from 'component/Icon.svelte'
    import Details from 'component/Details.svelte'
    import Precode from 'component/Precode.svelte'

    let detailsObj={
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
        stateObj: {
            Default: '',
            Open: 'open'
        }
    },
        detailsVariant = 'Default',
        detailsColor = 'Default',
        detailsState = 'Default',

        detailsClass = ''

    $: {
        detailsClass = fnDetailsClass()
    
        function fnDetailsClass() {
            let classesString = ''

            if (detailsObj.variantsObj[detailsVariant] && detailsObj.colorsObj[detailsColor])
                classesString = `dtl-${detailsObj.variantsObj[detailsVariant]}${detailsObj.colorsObj[detailsColor]}`
            else
                if (detailsObj.variantsObj[detailsVariant])
                    classesString = `dtl-${detailsObj.variantsObj[detailsVariant]}`
                else
                    if (detailsObj.colorsObj[detailsColor])
                        classesString = `dtl${detailsObj.colorsObj[detailsColor]}`
            
            // if (detailsObj.stateObj[detailsState])
            //     classesString = `${classesString} ${detailsObj.stateObj[detailsState]}`

            return classesString
        }
    }

</script>

<section>
    <h2>Details</h2>
    <p>
        S4 has a pretty looking and flexy HTML <b>details</b> element of the disclosure toggle widget with the included
        <b>summary</b> header inside the element. The addition of <b>dtl-...</b> classes makes the widget styles changeable.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Variants</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(detailsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => detailsVariant = key}
                        class="btn btn-{value}"
                        class:active={detailsVariant === key}
                        type="button"
                        disabled={detailsVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(detailsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => detailsColor = key}
                        class="btn btn{value}"
                        class:active={detailsColor === key}
                        type="button"
                        disabled={detailsColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>State</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(detailsObj.stateObj) as [key, value]}
                    <button
                        on:click={() => detailsState = key}
                        class="btn btn{value}"
                        class:active={detailsState === key}
                        type="button"
                        disabled={detailsState === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid padding--md background-color--positive border-radius--md">
                <Details class="{detailsClass} margin-bottom--none" open={detailsObj.stateObj[detailsState]}>
                    <svelte:fragment slot="title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </svelte:fragment>
                    <svelte:fragment slot="body">
                        <div class="padding--md">
                            Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                        </div>
                    </svelte:fragment>
                </Details>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Custom</b>
            <div class="display--grid padding--md background-color--positive border-radius--md">
                <Details class="background-color--negative-10" open>
                    <summary class="padding-x--xs padding-y--xxs justify-content--start background-color--transparent" slot="summary">
                        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-down.svg)" expand></span>
                        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-up.svg)" contract></span>
                        <div class="truncate font-weight--600">
                            Custom summary with truncated title.
                        </div>
                    </summary>
                    <div class="padding-x--sm pb-2 pt-1" slot="body">
                        <hr class="margin-top--none margin-bottom--xxs">
                        It is possible to independently set styles for the <b>Details</b> block and
                        also manage the contents of the <b>summary</b>, move, delete or replace
                        <b>expand</b> and <b>contract</b> icons.
                    </div>
                </Details>
            </div>        
        </div>
        <div class="display--grid gap--md">
            <b>Svelte</b>
            <Precode>
                {
`// before using the component, import as Details

// сommon uses
<Details class="${detailsClass}">
    <svelte:fragment slot="title">
        Title
    </svelte:fragment>
    <svelte:fragment slot="body">
        Body content place here ...
    </svelte:fragment>
</Details>

// custom uses
<Details class="background-color--negative-10" open>
    <summary class="padding-x--xs padding-y--xxs justify-content--start background-color--transparent" slot="summary">
        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-down.svg)" expand></span>
        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-up.svg)" contract></span>
        <div class="truncate font-weight--600">
            Title
        </div>
    </summary>
    <div class="padding-x--sm pb-2 pt-1" slot="body">
        <hr class="margin-top--none margin-bottom--xxs">
        Body content place here ...
    </div>
</Details>
`
                }
            </Precode>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<details class="dtl ${detailsClass}">
    <summary>
        Title
        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-down.svg)" expand></span>
        <span class="ico font-size--sm" style="--ico-image: url(/icons/chevron-up.svg)" contract></span>
    </summary>
    Content place here ...
</details>
`
                }
            </Precode>
        </div>
    </div>

    <!-- <div class="display--grid gap--md">
        <Details class="dtl-primary">
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="background-color--positive- margin--xxs-">
                    <hr class="mx-2 border-secondary">
                    <div class="padding--md">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
        <Details class="dtl-primary" open>
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="background-color--positive- margin--xxs-">
                    <hr class="mx-2 border-secondary">
                    <div class="padding--md">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
    </div> -->
</section>