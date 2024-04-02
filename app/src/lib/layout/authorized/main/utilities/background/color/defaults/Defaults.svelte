<script>
    let defaultsArr = [ 'positive', 'negative' ],
        defaultsInterval = 0
</script>

<div>
    <h4 id="defaults">Defaults</h4>
    <p>
        The classes from <b>background-color--...-10</b> to <b>background-color--...-90</b> make color
        transparent in percentage which point in the end of. Using <b>background-color--transparent</b>
        class make background transparent.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Gradient</b>
            <div class="display--flex flex-wrap--wrap gap--xs">
                <button
                    class="btn"
                    class:active={defaultsInterval}
                    on:click={() => defaultsInterval = 10}
                    disabled={defaultsInterval}
                >
                    show
                </button>
                <button
                    class="btn"
                    class:active={!defaultsInterval}
                    on:click={() => defaultsInterval = 0}
                    disabled={!defaultsInterval}
                >
                    hide
                </button>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div class="display--grid gap--sm grid-template-columns--2">
                    <div class="display--flex flex-direction--column-reverse gap--xs background-color--negative">
                        {#if defaultsInterval}
                            {#each Array(9) as _, i}
                                <div
                                    class="background-color--{defaultsArr[0]}-{(i + 1) * 10} padding--md c-{defaultsArr[i < 5 ? 0 : 1]} text-align--center"
                                >background-color--{defaultsArr[0]}-{(i + 1) * 10}</div>
                            {/each}
                        {/if}
                        <div class="background-color--{defaultsArr[0]} padding--md c-{defaultsArr[1]} text-align--center">
                            background-color--{defaultsArr[0]}
                        </div>
                    </div>
                    <div class="display--flex flex-direction--column-reverse gap--xs">
                        {#if defaultsInterval}
                            {#each Array(9) as _, i}
                                <div
                                    class="background-color--{defaultsArr[1]}-{(i + 1) * 10} padding--md c-{defaultsArr[i < 4 ? 1 : 0]} text-align--center"
                                >
                                    background-color--{defaultsArr[0]}-{(i + 1) * 10}
                                </div>
                            {/each}
                        {/if}
                        <div class="background-color--{defaultsArr[1]} padding--md c-{defaultsArr[0]} text-align--center">
                            background-color--{defaultsArr[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
