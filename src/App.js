import './App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Container} from "@mui/material";

const columns = [
  {field: "id", headerName: "ID", width: 50},
  { field: 'description', headerName: 'Description', width: 600 },
  {
    field: 'source',
    headerName: 'Source',
    width: 70,
    renderCell: (params) => {
      return (<a href={params.row.source}>link</a>)
    }
  },
  {
    field: 'date',
    headerName: 'Date Published',
    width: 150,
    type: "date"
  },
  {
    field: 'authors',
    headerName: 'Authors',
    width: 200,
  },
  {
    field: "authorAffiliations",
    headerName: "Author Affiliations",
    width: 200
  },
  {
    field: 'submitter',
    headerName: 'Submitter',
    type: 'number',
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    description: "Models play against themselves in order to iteratively improve their performance in games.",
    source: "https://www.nature.com/articles/nature16961",
    date: new Date(2016, 0, 27),
    submitter: "Jun Shern Chan",
    authors: "Silver et al.",
    authorAffiliations: "DeepMind"
  },
  {
    id: 2,
    description: "Machine learning reduced cooling bills in Google datacenters by 40%",
    source: "https://www.deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40",
    date: new Date(2016, 6, 20),
    submitter: "Thomas Woodside",
    authors: "Evans & Gao",
    authorAffiliations: "DeepMind"
  },
  {
    id: 3,
    description: "Recurrent Neural Networks used to optimize the architecture of other networks",
    source: "https://arxiv.org/abs/1611.01578",
    date: new Date(2016, 10, 5),
    submitter: "Thomas Woodside",
    authors: "Zoph & Le",
    authorAffiliations: "Google"
  },
  {
    id: 4,
    description: "Semantic segmentation models allow humans to label training images more quickly.",
    source: "https://arxiv.org/abs/1806.07527",
    date: new Date(2018, 5, 20),
    submitter: "Dan Hendrycks",
    authors: "Andriluka et al.",
    authorAffiliations: "Google"
  },
  {
    id: 5,
    description: "Reinforcement learning used to optimize chip placement.",
    source: "https://ai.googleblog.com/2020/04/chip-design-with-deep-reinforcement.html",
    date: new Date(2020, 4, 23),
    submitter: "Zach Stein-Perlman",
    authors: "Mirhoseini, Goldie et al.",
    authorAffiliations: "Google"
  },
  {
    id: 6,
    description: "Reinforcement learning used to optimize chip placement (improvement on above).",
    source: "https://www.nature.com/articles/s41586-021-03544-w",
    date: new Date(2021, 5, 9),
    submitter: "Mantas Mazeika",
    authors: "Mirhoseini, Goldie et al.",
    authorAffiliations: "Google"
  },
  {
    id: 7,
    description: "Code generation models like GitHub copilot have the potential to improve researcher productivity.",
    source: "https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/",
    date: new Date(2021, 6, 29),
    submitter: "Thomas Woodside",
    authors: "GitHub",
    authorAffiliations: "GitHub"
  },
  {
    id: 8,
    description: "Uses a robust supervised learning approach to architect accelerators.",
    source: "https://ai.googleblog.com/2022/03/offline-optimization-for-architecting.html",
    date: new Date(2022, 2, 17),
    submitter: "Zach Stein-Perlman",
    authors: "Kumar, Yazdanbakhsh et al.",
    authorAffiliations: "Google & UC Berkeley"
  },
  {
    id: 9,
    description: "Fine-tuning a language model on chain-of-thought prompting dataset that it self-generates.",
    source: "https://arxiv.org/abs/2203.14465",
    date: new Date(2022, 2, 28),
    submitter: "Nathaniel Li",
    authors: "Zelikman et al.",
    authorAffiliations: "Stanford & Google"
  },
  {
    id: 10,
    description: "Large language models helps humans find flaws in the outputs of other language models, thereby enabling them to more easily improve those models.",
    source: "https://arxiv.org/abs/2206.05802",
    date: new Date(2022, 5, 12),
    submitter: "Dan Hendrycks",
    authors: "Saunders, Yeh, Wu et al.",
    authorAffiliations: "OpenAI"
  },
  {
    id: 11,
    description: "Machine learning used to optimize compilers.",
    source: "https://ai.googleblog.com/2022/07/mlgo-machine-learning-framework-for.html",
    date: new Date(2022, 6, 6),
    submitter: "Oliver Zhang",
    authors: "Trofin, Qian et al.",
    authorAffiliations: "Google & CMU"
  },
  {
    id: 12,
    description: "Reinforcement learning used to generate nearly 13,000 circuits in GPUs.",
    source: "https://developer.nvidia.com/blog/designing-arithmetic-circuits-with-deep-reinforcement-learning/",
    date: new Date(2022, 6, 8),
    submitter: "Thomas Woodside",
    authors: "Roy et al.",
    authorAffiliations: "NVIDIA"
  },
  {
    id: 13,
    description: "ML code completion tools produce productivity benefits in Google engineers.",
    source: "https://ai.googleblog.com/2022/07/ml-enhanced-code-completion-improves.html?m=1",
    date: new Date(2022, 6, 27),
    submitter: "Aidan O'Gara",
    authors: "Tabachnyk & Nikolov",
    authorAffiliations: "Google"
  },
  {
    id: 14,
    description: "Language models create programming puzzle tasks for language models, increasing fine-tuned puzzle-solving performance drastically.",
    source: "https://arxiv.org/abs/2207.14502",
    date: new Date(2022, 6, 29),
    submitter: "Esben Kran",
    authors: "Haluptzok et al.",
    authorAffiliations: "Microsoft Research"
  },
  {
    id: 15,
    description: "Tries to predict future research directions based on past papers.",
    source: "https://arxiv.org/abs/2210.00881",
    date: new Date(2022, 8, 23),
    submitter: "Andy Zou",
    authors: "Krenn et al.",
    authorAffiliations: "Various"
  },
  {
    id: 16,
    description: "Language models generate outputs which are then used to train those models after a majority vote.",
    source: "https://arxiv.org/abs/2210.11610",
    date: new Date(2022, 8, 30),
    submitter: "Thomas Woodside",
    authors: "Huang et al.",
    authorAffiliations: "UIUC & Google"
  },
  {
    id: 17,
    description: "Deep reinforcement learning used to improve efficiency of matrix multiplication, a common operation in deep learning.",
    source: "https://www.nature.com/articles/s41586-022-05172-4",
    date: new Date(2022, 9, 5),
    submitter: "Thomas Woodside",
    authors: "Fawzi et al.",
    authorAffiliations: "DeepMind"
  },
  {
    id: 18,
    description: "Learns an optimizer by training \"a small neural network that ingests gradients and outputs parameter updates.\"",
    source: "https://arxiv.org/abs/2211.09760",
    date: new Date(2022, 10, 17),
    submitter: "James Campbell",
    authors: "Metz et al.",
    authorAffiliations: "Google"
  },
  {
    id: 19,
    description: "Uses language models, instead of humans, to provide feedback to language models.",
    source: "https://www.anthropic.com/constitutional.pdf",
    date: new Date(2022, 11, 15),
    submitter: "Thomas Woodside",
    authors: "Bowman et al.",
    authorAffiliations: "Anthropic"
  },
  {
    id: 20,
    description: "Uses a language model to create evaluations that test language models.",
    source: "https://arxiv.org/abs/2212.09251",
    date: new Date(2022, 11, 19),
    submitter: "Aaron Scher",
    authors: "Perez et al.",
    authorAffiliations: "Various"
  },
  {
    id: 21,
    description: "Uses language models to generate examples of instruction following, which are then used to finetune language models.",
    source: "https://arxiv.org/abs/2212.10560",
    date: new Date(2022, 11, 20),
    submitter: "Nathaniel Li",
    authors: "Wang et al.",
    authorAffiliations: "Various"
  },
  {
    id: 22,
    description: "Trains conversational chatbots on data generated by language models, rather than on human conversations.",
    source: "https://arxiv.org/abs/2302.03269",
    date: new Date(2023, 1, 7),
    submitter: "Aidan O'Gara",
    authors: "Chen et al.",
    authorAffiliations: "Columbia & Amazon Alexa AI"
  },
  {
    id: 23,
    description: "Uses ChatGPT to augment data for NLP tasks.",
    source: "https://arxiv.org/abs/2302.13007",
    date: new Date(2023, 1, 25),
    submitter: "Nathaniel Li",
    authors: "Dai et al.",
    authorAffiliations: "Google"
  },
  {
    id: 24,
    description: "Uses language models with evolutionary prompt engineering to design model architectures.",
    source: "https://arxiv.org/abs/2302.14838",
    date: new Date(2023, 1, 28),
    submitter: "Thomas Woodside",
    authors: "Chen et al.",
    authorAffiliations: "Google"
  },
  {
    id: 25,
    description: "Prompted GPT-3 to generate an instruction-following dataset that's used to fine tune another language model.",
    source: "https://crfm.stanford.edu/2023/03/13/alpaca.html",
    date: new Date(2023, 2, 13),
    submitter: "Nathaniel Li",
    authors: "Taori et al.",
    authorAffiliations: "Stanford"
  },
  {
    id: 26,
    description: "Language model gives itself feedback to improve its own generations.",
    source: "https://arxiv.org/abs/2303.17651",
    date: new Date(2023, 2, 30),
    submitter: "Andy Zou",
    authors: "Madaan et al.",
    authorAffiliations: "Various"
  },
  {
    id: 27,
    description: "Uses a language model as a reward model to augment the language model pretraining objective.",
    source: "https://arxiv.org/abs/2302.08582",
    date: new Date(2023, 1, 16),
    submitter: "Thomas Woodside",
    authors: "Korbak et al.",
    authorAffiliations: "Various"
  },
  {
    id: 28,
    description: "Uses a language model to pick the best refinement of an LLM response based on language feedback.",
    source: "https://arxiv.org/abs/2303.16755",
    date: new Date(2023, 2, 28),
    submitter: "Thomas Woodside",
    authors: "Scheurer et al.",
    authorAffiliations: "Various"
  },
  {
    id: 29,
    description: "Uses a language model to generate a refinement of a code completion based on language feedback.",
    source: "https://arxiv.org/abs/2303.16749",
    date: new Date(2023, 2, 28),
    submitter: "Jason Phang",
    authors: "Chen et al.",
    authorAffiliations: "Various"
  },
  {
    id: 30,
    description: "GPT-4 can be used to perform neural architecture search.",
    source: "https://arxiv.org/abs/2304.10970",
    date: new Date(2023, 3, 21),
    submitter: "Fred Zhang",
    authors: "Zheng et al.",
    authorAffiliations: "Various"
  },
  {
    id: 31,
    description: "Uses language models to augment genetic algorithm, the output of which serves as training data for an LLM.",
    source: "https://arxiv.org/abs/2304.10970",
    date: new Date(2022, 5, 17),
    submitter: "Herbie Bradley",
    authors: "Lehman et al.",
    authorAffiliations: "OpenAI"
  },
  {
    id: 32,
    description: "Uses LLMs to help automate ML experiments.",
    source: "https://arxiv.org/abs/2305.02499",
    date: new Date(2023, 4, 4),
    submitter: "",
    authors: "Zhang et al.",
    authorAffiliations: "UT Austin"
  },
  {
    id: 33,
    description: "Uses LLMs feedback for LLM prompt engineering.",
    source: "https://arxiv.org/abs/2305.03495",
    date: new Date(2023, 4, 4),
    submitter: "Zach Stein-Perlman",
    authors: "Pryzant et al.",
    authorAffiliations: "Microsoft"
  },
  {
    id: 34,
    description: "Uses LLMs to debug LLM code outputs without access to unit tests.",
    source: "https://arxiv.org/abs/2304.05128",
    date: new Date(2023, 3, 11),
    submitter: "Zach Stein-Perlman",
    authors: "Chen et al.",
    authorAffiliations: "Google & UC Berkeley"
  },
  {
    id: 35,
    description: "Uses LLMs for prompt engineering.",
    source: "https://arxiv.org/abs/2211.01910",
    date: new Date(2022, 10, 3),
    submitter: "Zach Stein-Perlman",
    authors: "Zhou et al.",
    authorAffiliations: "Various"
  },
  {
    id: 36,
    description: "Language model used to generate prompts that could correspond to training data, filter them, with the data used to train a stronger language model.",
    source: "https://arxiv.org/abs/2308.06259",
    date: new Date(2023, 7, 3),
    submitter: "",
    authors: "Li et al.",
    authorAffiliations: "Meta"
  },
  {
    id: 37,
    description: "LLM used to help refine prompts for vision-language models.",
    source: "https://arxiv.org/abs/2309.05950",
    date: new Date(2023, 8, 12),
    submitter: "Aidan O'Gara",
    authors: "Liu et al.",
    authorAffiliations: "CMU"
  },
  {
    id: 38,
    description: "LLMs used for genetic algorithm to generate LLM prompts.",
    source: "https://arxiv.org/abs/2309.05950",
    date: new Date(2023, 8,28),
    submitter: "Zach Stein-Perlman",
    authors: "Fernando et al.",
    authorAffiliations: "DeepMind"
  },
  {
    id: 39,
    description: "Fine tuned decision transformer used to generate data that is then used to retrain a new version of the base model in a loop.",
    source: "https://arxiv.org/abs/2306.11706",
    date: new Date(2023, 5,20),
    submitter: "Thomas Woodside",
    authors: "Bousmalis et al.",
    authorAffiliations: "DeepMind"
  }
];

function AIImprovingAIDataGrid() {
  return (
      <Box sx={{ height: 630, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            initialState={{
              sorting: {
                sortModel: [{ field: 'date', sort: 'desc' }],
              },
            }}
        />
      </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <h1>Examples of AI Improving AI</h1>
        <b>Author:</b> Thomas Woodside, <a href="https://safe.ai">Center for AI Safety</a>
        <br/>
        <b>Contributors:</b> Herbie Bradley, James Campbell, Jun Shern Chan, Aidan O'Gara, Dan Hendrycks, Esben Kran, Nathaniel Li, Mantas Mazeika, Aaron Scher, Zach Stein-Perlman,
        Fred Zhang, Oliver Zhang, Andy Zou.
        <br/>
        <b>Last Updated:</b> October 2, 2023
        <p style={{textAlign: "justify"}}>
          As machine learning algorithms become more capable of outperforming humans on some narrow tasks, they
          are increasingly being used to make improvements to themselves or other machine learning systems, or inputs
          to those systems such as hardware.
          In some cases, human feedback used to improve models has been replaced with AI feedback; in other cases,
          GPU circuits that were once designed by humans are being designed by AI systems. Some have warned that this
          "recursive self-improvement," if scaled up, could lead to AI spiraling beyond human control [1][2][3].
          <br/><br/>
          The table below collects some current examples of AI systems being used to improve AI systems. It should not be
          taken as an exhaustive list, since these applications can occur in many subsets of AI and we have not been
          able to review all recent AI papers. The "author" and "author affiliation" columns refer to the authors of
          the paper; the "submitter" column refers to the person who originally brought the paper to my attention.

          This site is no longer maintained. For a longer list not maintained or endorsed by the authors here, please see <a href="https://ai-improving-ai.com">ai-improving-ai.com</a>
          <br/><br/>
          [1] Nick Bostrom, Superintelligence
          <br/>
          [2] Joseph Carlsmith, <a href={"https://arxiv.org/abs/2206.13353"}>Is Power-seeking AI An Existential Risk?</a>
          <br/>
          [3] Dan Hendrycks, <a href={"https://arxiv.org/abs/2303.16200"}>Natural Selection Favors AIs Over Humans</a>
        </p>
      </Container>
      <Container maxWidth="m">
        <AIImprovingAIDataGrid></AIImprovingAIDataGrid>
      </Container>
    </div>
  );
}

export default App;
