import xw from "xwind";

const ExternalLinkIcon = () => (
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

const ORCHARD_LINKS = {
  ALL001: 'https://orcd.co/wa4byxj',
  ALL002: 'https://orcd.co/jyny3a0',
  ALL003: 'https://orcd.co/pr1lmmr',
  ALL004: 'https://orcd.co/8rrwoqe'
}

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-4`}>
    <div css={xw`font-mono text-4xl`}>All Records</div>
    <div css={xw`font-mono`}>
      We disbanded in 2009 but would love for you to check out some of the stuff
      we had the pleasure of releasing.
    </div>
    <div css={xw`font-mono flex`}>
      <div css={xw`w-16`}>
        <span css={xw`text-gray-400 mr-4`}>2004</span>
      </div>
      <div css={xw`flex flex-col`}>
        <div css={xw`flex`}>
          <span css={xw`text-gray-300 mr-6`}>ALL001</span>
          <div css={xw`flex`}>
            <div css={xw`mr-2 hover:underline`}>
            <a href={ORCHARD_LINKS.ALL001} target="_blank">Twilight City Fracture - The Endorian Issue EP</a>
            </div>{" "}
            <ExternalLinkIcon css={xw`opacity-50`} />
          </div>
        </div>
        <div css={xw`flex`}>
          <span css={xw`text-gray-300 mr-6`}>ALL002</span>
          <div css={xw`flex`}>
            <div css={xw`mr-2 hover:underline`}>
              <a href={ORCHARD_LINKS.ALL002} target="_blank">Someday Never - Home Is Where The Heartache Is</a>
            </div>{" "}
            <ExternalLinkIcon css={xw`opacity-50`} />
          </div>
        </div>
      </div>
    </div>
    <div css={xw`font-mono flex`}>
      <div css={xw`w-16`}>
        <span css={xw`text-gray-400 mr-4`}>2005</span>
      </div>
      <div css={xw`flex`}>
        <div>
          <span css={xw`text-gray-300 mr-6`}>ALL003</span>
        </div>
        <div css={xw`flex`}>
          <div css={xw`mr-2 hover:underline`}>
            <a href={ORCHARD_LINKS.ALL003} target="_blank">Scars to Prove - Scars To Prove</a>
          </div>{" "}
          <ExternalLinkIcon css={xw`opacity-50`} />
        </div>
      </div>
    </div>
    <div css={xw`font-mono flex`}>
      <div css={xw`w-16`}>
        <span css={xw`text-gray-400 mr-4`}>2006</span>
      </div>
      <div css={xw`flex`}>
        <div>
          <span css={xw`text-gray-300 mr-6`}>ALL004</span>
        </div>
        <div css={xw`flex`}>
          <div css={xw`mr-2 hover:underline`}>
            <a href={ORCHARD_LINKS.ALL004} target="_blank">Someday Never - The Natural Trend of Breathing EP</a>
          </div>{" "}
          <ExternalLinkIcon css={xw`opacity-50`} />
        </div>
      </div>
    </div>
  </div>
);

export default Index;
