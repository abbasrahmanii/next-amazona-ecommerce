import Layout from "../components/Layout";
import data from "../utils/data";
import Image from "next/image";
import { Button, Link } from "@material-ui/core";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.products.map((product) => (
              <div key={product.name}>
                <div
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    backgroundColor: "#a5a5a5",
                  }}
                >
                  <Link href={`product/${product.slug}`}>
                    <div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                      />
                      <div>
                        <h1>{product.name}</h1>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <h1>${product.price}</h1>
                    <Button color="secondary">Add to cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </Layout>
  );
}
