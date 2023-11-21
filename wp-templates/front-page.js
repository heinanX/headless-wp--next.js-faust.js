import { useQuery, gql } from '@apollo/client';

export default function Component() {
  const { data } = useQuery(Component.query);
  console.log(data);
  

  return (
    <>
  
          <div className="text-center">
            <p>This page is utilizing the "front-page" WordPress template.</p>
            <code>this is b</code>
          </div>

    </>
  );
}

Component.query = gql`
query pages {
  pages {
    nodes {
      editorBlocks {
        name
        renderedHtml
      }
    }
  }
}
`;
