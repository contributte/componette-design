<template>
  <div>
    <div class="px-2 md:px-4">
      <div class="container mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="w-full flex flex-wrap justify-between">
            <div class="flex items-center w-full px-5 pt-2 md:pt-0 lg:px-8 mb-3 lg:mb-6 lg:w-1/2">
              <a href="" class="flex-shrink-0 mr-4">
                <img loading="lazy" src="https://avatars.githubusercontent.com/slevomat?s=128" class="w-8 h-8 rounded-full lg:h-16 lg:w-16" />
              </a>
              <div class="flex flex-col flex-1">
                <h3 class="inline-block mb-2 text-lg font-bold leading-tight text-teal-800 font-headers xl:text-xl align-middle">
                  <a href="" class="mr-2">tacoberu / nette-mailing</a> <span class="relative inline-block px-2 text-sm font-normal text-blue-700 bg-white rounded-full -mt-1 align-middle">3.2.0</span>
                </h3>
                <p class="text-sm text-gray-700">
                  Tracy is a perfect tool for debugging web apps, but as most of the web these days runs on AJAX, the Debugger Bar gets kind of outdated. This is an attempt to enable the Debugger Bar to update even on AJAX requests.
                </p>
              </div>
            </div>
            <div class="flex items-start w-auto sm:ml-16 md:mt-2 mb-2 md:mb-4 lg:ml-0">
              <div class="bg-white py-2 px-5 w-full rounded border flex items-center">
                <img loading="lazy" src="https://obr.now.sh/remixicon/system/download-cloud-line/64/8A99B0" class="w-5 h-5 mr-2" />
                <code class="text-blue-900 text-sm">composer require tacoberu/nette-fluent-translator</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 md:px-4 overflow-hidden">
      <div class="container mx-auto">
        <div class="grid grid-cols-7 gap-4 mb-4">
          <div class="order-2 row-span-3 col-span-7 lg:col-span-4 xl:col-span-5 lg:order-1 relative z-0">
            <svg fill="currentColor" viewBox="0 0 100 100" class="text-blue-200 absolute bottom-0 left-0 z-0 w-24 transform -mb-2 -ml-4 -translate-x-1/2 translate-y-1/2">
              <path id="Path_236" d="M12.9,24.2c-2.2,1.4-3.6,3.8-3.7,6.4v38.7c0.1,2.6,1.5,5,3.7,6.4L46.3,95c2.3,1.2,5.1,1.2,7.4,0l33.4-19.3 c2.2-1.4,3.6-3.8,3.7-6.4V30.6c-0.1-2.6-1.5-5-3.7-6.4L53.8,5c-2.3-1.2-5.1-1.2-7.4,0L12.9,24.2z" />
            </svg>
            <div class="bg-white rounded shadow-md z-10 relative" x-data="{ tab: 'readme' }">
              <div class="flex flex-col flex-wrap items-stretch w-full px-5 lg:px-8">
                <nav class="-mx-5 -mb-px">
                  <ul class="flex flex-wrap w-full items-end justify-between px-5 md:px-0 md:justify-start lg:min-h-16">
                    <li class="flex md:px-5" x-on:click="tab = 'readme'">
                      <span
                        class="font-medium text-blue-500 py-3 border-b-2 md:py-4 text-sm md:text-base"
                        x-bind:class="[tab === 'readme' ? 'text-blue-900 hover:text-blue-900 cursor-auto border-teal-600' : 'cursor-pointer hover:text-blue-900 border-transparent']"
                      >
                        Readme
                      </span>
                    </li>
                    <li class="flex md:px-5" x-on:click="tab = 'releases'">
                      <span
                        class="font-medium text-blue-500 py-3 border-b-2 md:py-4 text-sm md:text-base"
                        x-bind:class="[tab === 'releases' ? 'text-blue-900 hover:text-blue-900 cursor-auto border-teal-600' : 'cursor-pointer hover:text-blue-900 border-transparent']"
                      >
                        Releases
                        <span class="relative inline-block px-2 text-sm font-normal text-blue-700 bg-blue-100 rounded-full -mt-1 align-middle leading-tight ml-1">25</span>
                      </span>
                    </li>
                    <li class="flex md:px-5" x-on:click="tab = 'comments'">
                      <span
                        class="font-medium text-blue-500 py-3 border-b-2 md:py-4 text-sm md:text-base"
                        x-bind:class="[tab === 'comments' ? 'text-blue-900 hover:text-blue-900 cursor-auto border-teal-600' : 'cursor-pointer hover:text-blue-900 border-transparent']"
                      >
                        Comments
                        <span class="relative inline-block px-2 text-sm font-normal text-blue-700 bg-blue-100 rounded-full -mt-1 align-middle leading-tight ml-1">325</span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 pt-4 pb-5 border-t lg:px-8 lg:pt-5 lg:pb-8">
                <div class="w-full" x-show="tab === 'readme'">
                  <div class="markdown-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque arcu. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat
                      eu, orci. Mauris metus. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi leo mi, nonummy eget tristique
                      non, rhoncus non leo. Fusce tellus. Integer vulputate sem a nibh rutrum consequat. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam egestas wisi a erat. Duis pulvinar. Curabitur sagittis
                      hendrerit ante. Donec vitae arcu. Proin mattis lacinia justo. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.
                    </p>

                    <p>
                      Fusce tellus. Etiam neque. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Fusce wisi. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                      molestiae non recusandae. Sed ac dolor sit amet purus malesuada congue. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Vivamus porttitor turpis ac leo. Nulla non lectus sed nisl molestie
                      malesuada. Pellentesque pretium lectus id turpis. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>

                    <p>
                      Fusce consectetuer risus a nunc. Vivamus porttitor turpis ac leo. Aenean vel massa quis mauris vehicula lacinia. Proin in tellus sit amet nibh dignissim sagittis. Mauris suscipit, ligula sit amet pharetra semper, nibh
                      ante cursus purus, vel sagittis velit mauris vel metus. Fusce nibh. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Phasellus et lorem id felis nonummy placerat. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Vivamus
                      luctus egestas leo.
                    </p>

                    <p>
                      Nunc tincidunt ante vitae massa. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Vivamus ac leo pretium faucibus. Etiam bibendum elit eget erat.
                      Pellentesque pretium lectus id turpis. Suspendisse nisl. Nullam faucibus mi quis velit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus. Duis risus. Integer imperdiet lectus quis justo. Curabitur bibendum justo non orci.
                    </p>

                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam faucibus mi quis velit. Vivamus luctus egestas leo. Nullam eget nisl. Maecenas aliquet accumsan leo. Nullam justo enim,
                      consectetuer nec, ullamcorper ac, vestibulum in, elit. Aliquam erat volutpat. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Praesent vitae arcu tempor
                      neque lacinia pretium. Mauris metus. Nulla non arcu lacinia neque faucibus fringilla. Nam sed tellus id magna elementum tincidunt. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis
                      velit mauris vel metus. Curabitur bibendum justo non orci. Nam quis nulla. Nullam dapibus fermentum ipsum. Aliquam ornare wisi eu metus. Etiam dictum tincidunt diam.
                    </p>
                  </div>
                </div>
                <div class="w-full" x-show="tab === 'releases'">
                  <p>List of releases</p>
                </div>
                <div class="w-full" x-show="tab === 'comments'">
                  <p>List of comments</p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-3 col-span-7 lg:col-span-3 xl:col-span-2 z-10">
            <div class="bg-white rounded shadow-md relative z-10 mb-4">
              <div class="flex flex-wrap items-center justify-start px-5 pt-3 lg:px-8 lg:pt-4 min-h-16">
                <img loading="lazy" src="https://obr.now.sh/remixicon/logos/github-fill/64/C1CCDB" class="flex-shrink-0 w-5 h-5 mb-3 lg:mb-4 mr-2" />
                <div class="mb-3 lg:mb-4 flex-1">
                  <h2 class="font-bold text-gray-800 lg:text-lg font-headers">Github</h2>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 py-3 border-t lg:px-8 lg:py-4">
                <a href="/" class="text-blue-900 underline hover:no-underline">tacoberu / nette-fluent-translator</a>
              </div>
            </div>
            <div class="bg-white rounded shadow-md relative z-10 mb-4">
              <div class="flex flex-wrap items-center justify-start px-5 pt-3 lg:px-8 lg:pt-4 min-h-16">
                <img loading="lazy" src="https://obr.now.sh/remixicon/business/bar-chart-fill/64/C1CCDB" class="flex-shrink-0 w-5 h-5 mb-3 lg:mb-4 mr-2" />
                <div class="mb-3 lg:mb-4 flex-1">
                  <h2 class="font-bold text-gray-800 lg:text-lg font-headers">Statistics</h2>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 py-3 border-t lg:px-8 lg:py-4">
                <div class="grid grid-cols-2 row-gap-5 w-full">
                  <div class="flex items-center flex-1 text-xs text-blue-700">
                    <div class="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal-100 rounded-full">
                      <img loading="lazy" src="https://obr.now.sh/remixicon/system/download-cloud-fill/64/467A85" class="w-4 h-4" />
                    </div>
                    481
                  </div>
                  <div class="flex items-center flex-1 text-xs text-blue-700">
                    <div class="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal-100 rounded-full">
                      <img loading="lazy" src="https://obr.now.sh/remixicon/system/star-fill/64/467A85" class="w-4 h-4" />
                    </div>
                    481
                  </div>
                  <div class="flex items-center flex-1 text-xs text-blue-700">
                    <div class="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal-100 rounded-full">
                      <img loading="lazy" src="https://obr.now.sh/remixicon/development/bug-fill/64/467A85" class="w-4 h-4" />
                    </div>
                    481
                  </div>
                  <div class="flex items-center flex-1 text-xs text-blue-700">
                    <div class="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal-100 rounded-full">
                      <img loading="lazy" src="https://obr.now.sh/remixicon/weather/flashlight-fill/64/467A85" class="w-4 h-4" />
                    </div>
                    481
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-teal-200 rounded shadow-md mb-4">
              <div class="bg-orange-500 text-sm font-bold leading-tight py-1 uppercase text-white inline-flex items-center rounded-r pl-5 pr-2 lg:pl-8 mt-3 lg:mt-4">
                <img loading="lazy" src="https://obr.now.sh/remixicon/weather/blaze-line/64/ffffff" class="w-4 h-4 mr-2" />Hot
              </div>
              <div class="relative">
                <div class="px-5 pt-3 lg:px-8 lg:pt-4 text-teal-800">
                  <h2 class="text-lg mb-2 font-bold font-headers text-teal-900 lg:text-xl">CLI skripty v Nette aplikaci</h2>
                  <p class="mb-3 lg:mb-5">
                    Když se řekne Nette aplikace, vybaví se mi webová aplikace. Prezentery, šablony, formuláře a následně HTML výstup pro prohlížeč. Ale paralelně se světem webových prohlížečů existuje ještě jeden, naprosto odlišný, svět
                    příkazové řádky (CLI). A pokud naše webová aplikace potřebuje například periodicky spouštět nějaké úkony na pozadí, musíme se do světa CLI vydat.
                  </p>
                </div>
                <div class="absolute bg-gradient-b-transparent-teal-200 bottom-0 left-0 w-full h-32 pointer-events-none" aria-label="hidden"></div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 lg:px-8 pb-3 lg:pb-4">
                <span class="mb-3 lg:mb-4 text-sm mr-2 font-medium text-teal-800">24.3.2020</span>
                <a href="/" class="inline-flex px-4 py-2 mb-3 font-medium text-teal-800 uppercase border border-teal-300 rounded lg:mb-4 bg-white hover:bg-teal-100 transition duration-150 ease-in-out">Read more</a>
              </div>
            </div>
            <div class="bg-white rounded shadow-md relative z-10 mb-4">
              <div class="flex flex-wrap items-center justify-start px-5 pt-3 lg:px-8 lg:pt-4 min-h-16">
                <img loading="lazy" src="https://obr.now.sh/remixicon/finance/price-tag-2-line/64/C1CCDB" class="flex-shrink-0 w-5 h-5 mb-3 lg:mb-4 mr-2" />
                <div class="mb-3 lg:mb-4 flex-1">
                  <h2 class="font-bold text-gray-800 lg:text-lg font-headers">Badges</h2>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 py-3 border-t lg:px-8 lg:py-4">
                <div class="grid grid-cols-1 row-gap-2 w-full">
                  <a href="/"><img alt="" title="isitmaintained" src="https://isitmaintained.com/badge/resolution/wavevision/namespace-translator.svg" /></a>
                  <a href="/"><img alt="" title="isitmaintained" src="https://isitmaintained.com/badge/open/wavevision/namespace-translator.svg" /></a>
                  <a href="/"><img alt="" title="wavevision/namespace-translator" src="https://img.shields.io/packagist/v/wavevision/namespace-translator.svg" /></a>
                  <a href="/"><img alt="" title="wavevision/namespace-translator" src="https://img.shields.io/packagist/l/wavevision/namespace-translator.svg" /></a>
                </div>
              </div>
            </div>
            <div class="bg-white rounded shadow-md relative z-10 mb-4">
              <div class="flex flex-wrap items-center justify-start px-5 pt-3 lg:px-8 lg:pt-4 min-h-16">
                <img loading="lazy" src="https://obr.now.sh/remixicon/map/guide-fill/64/C1CCDB" class="flex-shrink-0 w-5 h-5 mb-3 lg:mb-4 mr-2" />
                <div class="mb-3 lg:mb-4 flex-1">
                  <h2 class="font-bold text-gray-800 lg:text-lg font-headers">Dependences</h2>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 py-3 border-t lg:px-8 lg:py-4">
                <div class="grid grid-cols-1 row-gap-2 w-full text-sm">
                  <div>php (>=5.3.3)</div>
                  <div><a href="/" class="text-blue-900 underline hover:no-underline">tacoberu/fluent-intl</a> (~1.0)</div>
                  <div><a href="/" class="text-blue-900 underline hover:no-underline">nette/utils</a> (>=2)</div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded shadow-md relative z-10">
              <div class="flex flex-wrap items-center justify-start px-5 pt-3 lg:px-8 lg:pt-4 min-h-16">
                <img loading="lazy" src="https://obr.now.sh/remixicon/map/guide-fill/64/C1CCDB" class="flex-shrink-0 w-5 h-5 mb-3 lg:mb-4 mr-2" />
                <div class="mb-3 lg:mb-4 flex-1">
                  <h2 class="font-bold text-gray-800 lg:text-lg font-headers">Keywords</h2>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between px-5 py-2 border-t lg:px-8 lg:py-3">
                <div class="w-full">
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">localization</a>
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">internationalization</a>
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">l10n</a>
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">locale</a>
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">language</a>
                  <a href="/" class="leading-tight py-1 px-3 bg-blue-100 rounded text-sm inline-block my-1 mr-1">nette</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
