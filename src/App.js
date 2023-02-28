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
    source: "https://www.nature.com/articles/nature16961",
    date: new Date(2018, 9, 22),
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
    authorAffiliations: "Google, UC Berkeley"
  },
  {
    id: 9,
    description: "Fine-tuning a language model on chain-of-thought prompting dataset that it self-generates.",
    source: "https://arxiv.org/abs/2203.14465",
    date: new Date(2022, 2, 28),
    submitter: "Nathaniel Li",
    authors: "Zelikman et al.",
    authorAffiliations: "Stanford University, Google"
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
    authorAffiliations: "Google, Carnegie Mellon University"
  },
  {
    id: 12,
    description: "Reinforcement learning used to generate nearly 13,000 circuits in GPUs.",
    source: "https://ai.googleblog.com/2022/03/offline-optimization-for-architecting.html",
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
    description: "Language models generate outputs which are then used to train those models after a majority vote.",
    source: "https://arxiv.org/abs/2210.11610",
    date: new Date(2022, 8, 30),
    submitter: "Thomas Woodside",
    authors: "Huang et al.",
    authorAffiliations: "University of Illinois at Urbana-Champaign, Google"
  },
  {
    id: 16,
    description: "Deep reinforcement learning used to improve efficiency of matrix multiplication, a common operation in deep learning.",
    source: "https://www.nature.com/articles/s41586-022-05172-4",
    date: new Date(2022, 9, 5),
    submitter: "Thomas Woodside",
    authors: "Fawzi et al.",
    authorAffiliations: "DeepMind"
  },
  {
    id: 17,
    description: "Learns an optimizer by training \"a small neural network that ingests gradients and outputs parameter updates.\"",
    source: "https://arxiv.org/abs/2211.09760",
    date: new Date(2022, 10, 17),
    submitter: "James Campbell",
    authors: "Metz et al.",
    authorAffiliations: "Google"
  },
  {
    id: 18,
    description: "Uses language models, instead of humans, to provide feedback to language models.",
    source: "https://www.anthropic.com/constitutional.pdf",
    date: new Date(2022, 11, 15),
    submitter: "Thomas Woodside",
    authors: "Bai et al.",
    authorAffiliations: "Anthropic"
  },
  {
    id: 19,
    description: "Uses language models to generate examples of instruction following, which are then used to finetune language models.",
    source: "https://arxiv.org/abs/2212.10560",
    date: new Date(2022, 11, 20),
    submitter: "Nathaniel Li",
    authors: "Wong et al.",
    authorAffiliations: "Various"
  },
  {
    id: 19,
    description: "Uses language models to generate examples of instruction following, which are then used to finetune language models.",
    source: "https://arxiv.org/abs/2212.10560",
    date: new Date(2022, 11, 20),
    submitter: "Nathaniel Li",
    authors: "Wong et al.",
    authorAffiliations: "Various"
  },
  {
    id: 20,
    description: "Uses a language model to create evaluations that test language models.",
    source: "https://arxiv.org/abs/2212.09251",
    date: new Date(2022, 11, 19),
    submitter: "Aaron Scher",
    authors: "Perez et al.",
    authorAffiliations: "Anthropic, Surge AI, Machine Intelligence Research Institute"
  },
  {
    id: 21,
    description: "Trains conversational chatbots on data generated by language models, rather than on human conversations.",
    source: "https://arxiv.org/abs/2302.03269",
    date: new Date(2023, 1, 7),
    submitter: "Aidan O'Gara",
    authors: "Chen et al.",
    authorAffiliations: "Columbia University, Amazon Alexa AI"
  }
];

function AIImprovingAIDataGrid() {
  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
        />
      </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <h1>Examples of AI Improving AI</h1>
        <b>Author:</b> Thomas Woodside, Center for AI Safety
        <br/>
        <b>Contributors:</b> James Campbell, Jun Shern Chan, Aidan O'Gara, Dan Hendrycks, Esben Kran, Nathaniel Li, Mantas Mazeika, Aaron Scher, Zach Stein-Perlman,
        Oliver Zhang.
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
          the paper; the "submitter" column refers to the person who originally brought the paper to my attention. If you
          know of an example not mentioned here, you may submit more <a href={"https://forms.gle/V6wukPMST6tw2PrB8"}>here</a>.

          <br/><br/>
          [1] Nick Bostrom, Superintelligence
          <br/>
          [2] Joseph Carlsmith, <a href={"https://arxiv.org/abs/2206.13353"}>Is Power-seeking AI An Existential Risk?</a>
          <br/>
          [3] Dan Hendrycks, Natural Selection Favors AIs Over Humans (forthcoming)
        </p>
      </Container>
      <Container maxWidth="m">
        <AIImprovingAIDataGrid></AIImprovingAIDataGrid>
      </Container>
    </div>
  );
}

export default App;
