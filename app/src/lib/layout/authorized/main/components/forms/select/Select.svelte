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
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Types</b>
            <div class="d-flex fw-wrap g-3">
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
        <div class="d-flex g-4 fw-wrap justify-content--evenly p-4 background-color--positive border-radius--md">
            <div class="d-grid gtc-2 g-3">
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