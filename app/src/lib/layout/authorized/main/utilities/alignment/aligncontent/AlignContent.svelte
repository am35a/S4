<script>
    import Precode from 'component/Precode.svelte'
    
    let containerTypesObj = {
        grid: 'd-grid gtc-2',
        flex: 'd-flex fw-wrap'
    },
        containerType = containerTypesObj.grid

    let alignContentArr = ['start', 'end', 'stretch', 'around', 'between', 'evenly'],
        alignContent = alignContentArr[0]

</script>

<section>
    <h3 id="alignContent">Align content</h3>
    <p>
        The <b>ac-{alignContentArr.join('/')}</b> classes sets the distribution of space between
        and around content item of <b>grid</b> and <b>flex</b> containers.
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Display</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(containerTypesObj) as [key, value]}
                    <button
                        class="btn"
                        class:active = {containerType === value}
                        on:click = {() => containerType = value}
                        disabled = {containerType === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Align</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each alignContentArr as value}
                    <button
                        class="btn"
                        class:active = {alignContent === value}
                        on:click = {() => alignContent = value}
                        disabled = {alignContent === value}
                    >ac-{value}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="{containerType} g-3 p-3 ac-{alignContent} bgc-positive br-md h" style="--h: 16em; --p_h: 24em;">
                <div class="bgc-negative-10 px-2 py-1">one</div>
                <div class="bgc-negative-10 px-2 py-1">two</div>
                <div class="bgc-negative-10 px-2 py-1">three</div>
                {#if containerType.includes('d-flex')}
                    <div class="bgc-negative-10 px-2 py-1">four</div>
                    <div class="bgc-negative-10 px-2 py-1">five</div>
                    <div class="bgc-negative-10 px-2 py-1">six</div>
                    <div class="bgc-negative-10 px-2 py-1">seven</div>
                    <div class="bgc-negative-10 px-2 py-1">eight</div>
                    <div class="bgc-negative-10 px-2 py-1">nine</div>
                    <div class="bgc-negative-10 px-2 py-1">ten</div>
                    <div class="bgc-negative-10 px-2 py-1">eleven</div>
                    <div class="bgc-negative-10 px-2 py-1">twelve</div>
                    <div class="bgc-negative-10 px-2 py-1">thirteen</div>
                    <div class="bgc-negative-10 px-2 py-1">fourteen</div>
                    <div class="bgc-negative-10 px-2 py-1">fifteen</div>
                    <div class="bgc-negative-10 px-2 py-1">sixteen</div>
                    <div class="bgc-negative-10 px-2 py-1">seventeen</div>
                    <div class="bgc-negative-10 px-2 py-1">eighteen</div>
                    <div class="bgc-negative-10 px-2 py-1">nineteen</div>
                {/if}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="${containerType} ac-${alignContent}">
    // ...
</div>
`
                }
            </Precode>
        </div>
    </div>
</section>