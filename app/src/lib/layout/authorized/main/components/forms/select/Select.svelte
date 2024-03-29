<script>
    import Select from 'component/Select.svelte'

    let selectFeaturesObj={
            Default: '',
            Multiple: 'multiple'
        },
        selectFeature = 'Default'

    export let inputClass = ''
</script>

<section>
    <h3 id="select">Select</h3>
    <!-- <p>
        <b>FrmTxt</b>
    </p> -->
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Types</b>
            <div class="display--flex flex-wrap--wrap gap--sm">
                {#each Object.entries(selectFeaturesObj) as [key, value]}
                    <button
                        on:click={() => selectFeature = key}
                        class="btn btn{value}"
                        class:active={selectFeature === key}
                        type="button"
                        disabled={selectFeature === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--flex gap--md flex-wrap--wrap justify-content--evenly padding--md background-color--positive border-radius--md">
            <div class="display--grid grid-template-columns--2 gap--sm">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Select
                        class="{inputClass}"
                        name="valueslist"
                        multiple={selectFeaturesObj[selectFeature]}
                        size={selectFeaturesObj[selectFeature] ? '3' : ''}
                    >
                        <option value="first" selected>First value</option>
                        <option value="second">Second value</option>
                        <option value="third">Third value</option>
                        <option value="third">Fourth value</option>
                    </Select>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Select
                        class="{inputClass} active"
                        name="valueslist"
                        multiple={selectFeaturesObj[selectFeature]}
                        size={selectFeaturesObj[selectFeature] ? '3' : ''}
                    >
                        <option value="first" selected>First value</option>
                        <option value="second">Second value</option>
                        <option value="third">Third value</option>
                        <option value="third">Fourth value</option>
                    </Select>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Select
                        class="{inputClass}"
                        name="valueslist"
                        multiple={selectFeaturesObj[selectFeature]}
                        size={selectFeaturesObj[selectFeature] ? '3' : ''}
                        disabled
                    >
                        <option value="first" selected>First value</option>
                        <option value="second">Second value</option>
                        <option value="third">Third value</option>
                        <option value="third">Fourth value</option>
                    </Select>
                </div>
                <b class="justify-self--end align-self--center">Сhecked & Disabled</b>
                <div>
                    <Select
                        class="{inputClass} active"
                        name="valueslist"
                        multiple={selectFeaturesObj[selectFeature]}
                        size={selectFeaturesObj[selectFeature] ? '3' : ''}
                        disabled
                    >
                        <option value="first" selected>First value</option>
                        <option value="second">Second value</option>
                        <option value="third">Third value</option>
                        <option value="third">Fourth value</option>
                    </Select>
                </div>
            </div>
        </div>        
    </div>
</section>