import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

interface FeatureListProps {
  searchQuery: string;
  activeTab: string;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const features = [
  { title: 'About', description: 'About Syna', category: 'General' },
  { title: 'Donate', description: 'Support Syna’s Project', category: 'General' },
  { title: 'Help', description: 'Get some guidance', category: 'General' },
  { title: 'Changelog', description: 'Always stay updated', category: 'General' },
  { title: 'Discord', description: 'Join Syna’s Discord Server', category: 'General' },
  { title: 'Status', description: 'See Syna’s Status', category: 'General' },

  { title: 'Info', description: 'Learn a little more about Syna', category: 'Utility' },
  { title: 'Embed', description: 'Send cute Embed messages with Syna', category: 'Utility' },
  { title: 'IP', description: 'Lookup an IP address information', category: 'Utility' },
  { title: 'Math', description: 'Integrated Calculator', category: 'Utility' },
  { title: 'Ping', description: 'View Syna’s Ping', category: 'Utility' },
  { title: 'Say', description: 'Make Syna send a voice message', category: 'Utility' },
  { title: 'Shazam', description: 'Identify your Favorite song', category: 'Utility' },
  { title: 'Weather', description: 'Get weather insight for any location', category: 'Utility' },
  { title: 'Translate', description: 'Translate any text', category: 'Utility' },
  { title: 'Time', description: 'Get the current time of any timezone', category: 'Utility' },

  { title: 'Avatar', description: 'View a users avatar', category: 'Fun' },
  { title: 'Banner', description: 'View a users banner', category: 'Fun' },
  { title: 'Kiss', description: 'Kiss any user', category: 'Fun' },
  { title: 'Marry', description: 'Marry anyone you want', category: 'Fun' },
  { title: 'Insult', description: 'Insult any user', category: 'Fun' },
  { title: 'Urban', description: 'See the urban Urban Dictionary', category: 'Fun' },
  { title: 'Joke', description: 'Get a random joke', category: 'Fun' },
  { title: 'Meme', description: 'Get a random meme', category: 'Fun' },
  { title: 'Quote', description: 'Get some inspiration', category: 'Fun' },

  { title: 'Snake', description: 'Play snake', category: 'Games' },
  { title: 'TicTacToe', description: 'Play TicTacToe', category: 'Games' },
  { title: 'RPS', description: 'Play Rock Paper Scissors', category: 'Games' },
  { title: 'Trivia', description: 'Play Trivia', category: 'Games' },

  { title: 'Roblox', description: 'Get Roblox user info', category: 'Social' },
  { title: 'UserStatus', description: 'Join Syna Discord server', category: 'Social' },
  { title: 'Poll', description: 'Create a poll in chat', category: 'Social' },
  { title: 'Shoutout', description: 'Give a public Shoutout', category: 'Social' },

];

const itemsPerPage = 4;

const FeatureList: FC<FeatureListProps> = ({ searchQuery, activeTab, currentPage, onPageChange }) => {
  const filteredFeatures = features
    .filter((feature) => feature.category === activeTab)
    .filter((feature) => feature.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);
  const paginatedFeatures = filteredFeatures.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <AnimatePresence>
          {paginatedFeatures.length > 0 ? (
            paginatedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-0.5 w-full md:w-[400px] hover:bg-indigo-500/20"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                transition={{ duration: 0.4 }}
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xl font-normal">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {feature.title}
                        </span>
                      </span>
                    </div>
                    <p className="text-indigo-200/65">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-gray-400"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.4 }}
            >
              Coming Soon...
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {filteredFeatures.length > itemsPerPage && (
        <div className="flex justify-center space-x-4 mt-8">
          <button
            className={`btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] ${currentPage === 1 ? 'bg-gray-900 cursor-not-allowed' : 'bg-gray-900'}`}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &larr; Prev
          </button>
          <button
            className={`btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] ${currentPage === totalPages ? 'bg-gray-900 cursor-not-allowed' : 'bg-gray-900'}`}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
};

export default FeatureList;