<script lang="ts">
    // import Icon from 'component/Icon.svelte'
    import Details from 'component/Details.svelte'
    import Precode from 'component/Precode.svelte'

    let detailsObj : { [key: string]: any } = {
        variantsObj: {
            Default: '' as string,
            Alt: 'alt' as string,
            Outline: 'outline' as string
        },
        colorsObj: {
            Default: '' as string,
            Primary: '-primary' as string,
            Secondary: '-secondary' as string,
            Info: '-info' as string,
            Success: '-success' as string,
            Warning: '-warning' as string,
            Error: '-error' as string,
        },
        stateObj: {
            Default: '' as string,
            Open: 'open'
        }
    },
        detailsVariant: string = 'Default',
        detailsColor: string = 'Default',
        detailsState: string = 'Default',

        detailsClass: string = ''

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
        ...
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex fw-wrap g-3">
                {#each Object.entries(detailsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => detailsVariant = key}
                        class="btn btn-{value}"
                        class:active = {detailsVariant === key}
                        type="button"
                        disabled = {detailsVariant === key}
                    >{key}</button>
                {/each}
            </div>
            <div class="d-grid g-4">
                <b>Colors</b>
                <div class="d-flex fw-wrap g-3">
                    {#each Object.entries(detailsObj.colorsObj) as [key, value]}
                        <button
                            on:click={() => detailsColor = key}
                            class="btn btn{value}"
                            class:active = {detailsColor === key}
                            type="button"
                            disabled = {detailsColor === key}
                        >{key}</button>
                    {/each}
                </div>
            </div>
            <div class="d-grid g-4">
                <b>State</b>
                <div class="d-flex fw-wrap g-3">
                    {#each Object.entries(detailsObj.stateObj) as [key, value]}
                        <button
                            on:click={() => detailsState = key}
                            class="btn btn{value}"
                            class:active = {detailsState === key}
                            type="button"
                            disabled = {detailsState === key}
                        >{key}</button>
                    {/each}
                </div>
            </div>
                <div class="d-grid g-4">
                <b>Preview</b>
                <div class="d-grid g-4 p-4 bgc-positive br">
                    <Details class="dtl mb-0" open={detailsObj.stateObj[detailsState]}>
                        <svelte:fragment slot="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </svelte:fragment>
                        <svelte:fragment slot="body">
                            <div class="">
                                <!-- <hr class="mx-2 border-secondary"> -->
                                <div class="p-4">
                                    Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                                </div>
                            </div>
                        </svelte:fragment>
                    </Details>
                    <!-- <Details class="{detailsClass} mb-0" open={detailsObj.stateObj[detailsState]}>
                        <svelte:fragment slot="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </svelte:fragment>
                        <svelte:fragment slot="body">
                            <div class="">
                                <div class="p-4">
                                    Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                                </div>
                            </div>
                        </svelte:fragment>
                    </Details> -->
                </div>        
            </div>

            <div class="d-grid g-4">
                <div class="d-grid g-4">
                    <b>Svelte</b>
                    <Precode>
                        {
`// before using the component, import it
// import Details from 'component/Alert.svelte'

<Details class="${detailsClass}">
    Details component place.
</Details>
`
                        }
                    </Precode>
                </div>
            </div>
    

        </div>
    </div>

    <!-- <div class="d-grid g-4">
        <Details class="dtl-primary">
            <svelte:fragment slot="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </svelte:fragment>
            <svelte:fragment slot="body">
                <div class="bgc-positive- m-1-">
                    <hr class="mx-2 border-secondary">
                    <div class="p-4">
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
                <div class="bgc-positive- m-1-">
                    <hr class="mx-2 border-secondary">
                    <div class="p-4">
                        Eligendi quibusdam ut labore ex eius? Corrupti voluptates dicta ducimus mollitia. Reprehenderit debitis reiciendis, facere voluptatum odio neque perspiciatis laboriosam ullam laudantium repellat, qui quod sit alias voluptas impedit illum.
                    </div>
                </div>
            </svelte:fragment>
        </Details>
    </div> -->
</section>