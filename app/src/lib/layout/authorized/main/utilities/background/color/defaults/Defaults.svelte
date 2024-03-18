<script>
    let defaultsArr = [ 'positive', 'negative' ],
        defaultsInterval = 0
</script>

<div>
    <h4 id="defaults">Defaults</h4>
    <p>
        The classes from <b>background-color--...-10</b> to <b>background-color--...-90</b> make color transparent in percentage which point in the end of.
        Using <b>background-color--transparent</b> class make background transparent.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Gradient</b>
            <div class="display--flex fw-wrap g-2">
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
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid g-3 gtc-2">
                    <div class="display--flex fd-column-reverse g-2 background-color--negative">
                        {#if defaultsInterval}
                            {#each Array(9) as _, i}
                                <div
                                    class="background-color--{defaultsArr[0]}-{(i + 1) * 10} p-4 c-{defaultsArr[i < 5 ? 0 : 1]} ta-center"
                                >background-color--{defaultsArr[0]}-{(i + 1) * 10}</div>
                            {/each}
                        {/if}
                        <div class="background-color--{defaultsArr[0]} p-4 c-{defaultsArr[1]} ta-center">
                            background-color--{defaultsArr[0]}
                        </div>
                    </div>
                    <div class="display--flex fd-column-reverse g-2">
                        {#if defaultsInterval}
                            {#each Array(9) as _, i}
                                <div
                                    class="background-color--{defaultsArr[1]}-{(i + 1) * 10} p-4 c-{defaultsArr[i < 4 ? 1 : 0]} ta-center"
                                >
                                    background-color--{defaultsArr[0]}-{(i + 1) * 10}
                                </div>
                            {/each}
                        {/if}
                        <div class="background-color--{defaultsArr[1]} p-4 c-{defaultsArr[0]} ta-center">
                            background-color--{defaultsArr[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
