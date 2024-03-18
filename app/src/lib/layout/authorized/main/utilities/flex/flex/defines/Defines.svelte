<script>
    import Precode from 'component/Precode.svelte'

    let definesArr = ['auto', 'initial', 'none'],
        define1 = 'auto',
        define2 = 'auto',
        define3 = 'auto'

    let containerWidth = 100
</script>

<div>
    <h4 id="defines">Defines</h4>
    <p>
        The <b>flex</b> class do nothing with items into clear flex container, only sets container items as initial
        parameters for modification items - <Precode class="py-0 px-1 display--inline">flex: 0 1 auto;</Precode>.
        There are variables can be used to control the flex class <b>--flex-grow</b>, <b>--flex-shrink</b> and <b>--flex-basis</b>.
    </p>
    <p>
        If necessary use flex params separately there are classes <b>flex-grow</b>, <b>flex-shrink</b> and <b>flex-basis</b>.
        The classes work with same variables <b>--flex-grow</b>, <b>--flex-shrink</b> and <b>--flex-basis</b>.
    </p>
    <div class="display--grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! All variables <b>--flex-grow</b>, <b>--flex-shrink</b> and <b>--flex-basis</b> are adaptive. The list
            of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid g-4">
            <b>Defines</b>
            <div class="display--flex g-3">
                <select
                    class="frm"
                    bind:value={define1}
                >
                    {#each definesArr as define}
                        <option value={define}>
                            {define}
                        </option>
                    {/each}
                </select>                
                <select
                    class="frm"
                    bind:value={define2}
                >
                    {#each definesArr as define}
                        <option value={define}>
                            {define}
                        </option>
                    {/each}
                </select>                
                <select
                    class="frm"
                    bind:value={define3}
                >
                    {#each definesArr as define}
                        <option value={define}>
                            {define}
                        </option>
                    {/each}
                </select>                
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid mb-2">
                    <label for="mixContainerWidth" class="display--grid gtc-3 align-items--end px-2">
                        <small class="ta-start">min</small>
                        <div class="ta-center">Width {containerWidth}%</div>
                        <small class="ta-end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="mixContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                <div class="display--flex g-2 background-color--negative-10 p-2 w" style="--w: {containerWidth}%">
                    <div class="flex--{define1} background-color--negative-10 px-2 py-1">{define1}</div>
                    <div class="flex--{define2} background-color--negative-10 px-2 py-1">{define2}</div>
                    <div class="flex--{define3} background-color--negative-10 px-2 py-1">{define3}</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`<div class="display--flex">
    <div class="flex--${define1}></div>
    <div class="flex--${define2}></div>
    <div class="flex--${define3}></div>
</div>
`
                }
            </Precode>
        </div>
    </div>
</div>