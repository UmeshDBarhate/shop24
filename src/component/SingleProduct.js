import React from "react";
import { Card } from "react-bootstrap";
import { cart } from './atoms';
import { useAtom } from "jotai";
import { Button } from "react-bootstrap";

const SingleProduct = ({ apidata }) => {
  const [addtocart, setAddtocart] = useAtom(cart)

  const item = {
    id: apidata.id,
    itemName: apidata.title,
    itemPrice: apidata.price,
  };

  return (
    <>
      <div className="singlecard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={apidata.image}
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title>{apidata.title}</Card.Title>

            <Card.Text>{apidata.price}</Card.Text>
            <Card.Text>{apidata.rating.rate}</Card.Text>

            {addtocart.some((p) => p.id === apidata.id) ? (
              <Button disabled={true}>Aleredy Added</Button>
            ) : (
              <Button
                variant="primary"
                className="d-fex align-item-center"
                id="addtocart"
                onClick={() => {
                  setAddtocart([...addtocart, item]);
                }}
              >
                Add to Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
