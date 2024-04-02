<script>
    import Precode from 'component/Precode.svelte'

    let containerClasses = 'overflow--hidden flex-wrap--wrap',
        containerWidth = 50,
        whiteSpaceArr = ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces'],
        whiteSpace = whiteSpaceArr[0]
</script>

<section>
    <h3 id="whiteSpace">White space</h3>
    <p>
        The <b>white-space--{whiteSpaceArr.join('/')}</b> classes sets how provide horizontal or vertical space between other
        characters inside an element is handled.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Wrap</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each whiteSpaceArr as value}
                    <button
                        class="btn"
                        class:active={whiteSpace === value}
                        on:click={() => whiteSpace = value}
                        disabled={whiteSpace === value}
                    >{value}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid margin-bottom--xs">
                    <label for="whiteSpaceContainerWidth" class="display--grid grid-template-columns--3 align-items--end padding-x--xs">
                        <small class="text-align--start">min</small>
                        <div class="text-align--center">Width {containerWidth}%</div>
                        <small class="text-align--end">max</small>
                    </label>
                    <input
                        class="frm"
                        id="whiteSpaceContainerWidth"
                        min={0}
                        max={100}
                        step={1}
                        bind:value={containerWidth}
                        type="range"
                    >
                </div>
                <div class="white-space--{whiteSpace} {containerClasses}" style="width: {containerWidth}%;">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>                    
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<p class="white-space--${whiteSpace}">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
`
                }
            </Precode>
        </div>
    </div>
</section>