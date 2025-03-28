import { useEffect, useState } from "react";
import { Category } from "../../../interfaces/entities";
import { Tag } from "../../../interfaces/entities";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  description: string;
  author: string;
  price: number;
  pictureUrl: string;
  city: string;
  category: number;
  tags: string[];
};

const NewAd = () => {
  const [categories, setCategories] = useState<Category[]>([]);  
  const [tags, setTags] = useState<Tag[]>([]);

  const fetchTags = async () => {
    try {
      const response = await axios.get<Tag[]>(
        `${import.meta.env.VITE_API_URL}/tags`
      );
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
      "http://localhost:3000/categories"
      );
      console.log("API response:", response.data); 
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      const dataWithTags = {
        ...data,
        tags: data.tags.map((tagId) => ({ id: tagId })),
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/ads`, dataWithTags);
      toast.success("Annonce créée avec succès!");
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la création de l'annonce");
    }
  };

    return (
        <>
            <h2>Publier une annonce</h2>
            <div className="new-content-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    className="text-field-new-ad"
                    type="text"
                    placeholder="Titre de l'anonce"
                    {...register("title", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                    <input
                    className="text-field-new-ad"
                    type="text"
                    placeholder="Description"
                    {...register("description", { required: true })}
                    />
                    {errors.description && <span>This field is required</span>}
                    <input
                    className="text-field-new-ad"
                    type="text"
                    placeholder="Auteur"
                    {...register("author", { required: true })}
                    />
                    {errors.author && <span>This field is required</span>}
                    <input
                    className="text-field-new-ad"
                    type="number"
                    placeholder="Prix"
                    {...register("price", { required: true })}
                    />
                    {errors.price && <span>This field is required</span>}
                    <input
                    className="text-field-new-ad"
                    type="text"
                    placeholder="Lien vers une image"
                    {...register("pictureUrl", { required: true })}
                    />
                    {errors.pictureUrl && <span>This field is required</span>}
                    <input
                    className="text-field-new-ad"
                    type="text"
                    placeholder="Ville"
                    {...register("city", { required: true })}
                    />
                    {errors.city && <span>This field is required</span>}
                    <select
                    {...register("category", { required: true })}
                    className="text-field-new-ad"
                    >

                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                        {category.label}
                        </option>
                    ))}
                    <option value="">Choisissez une catégorie</option>
                    </select>
                    {errors.category && <span>This field is required</span>}
                    <div className="tags-container">
                    <p>Tags:</p>
                    {tags.map((tag) => (
                        <label key={tag.id}>
                          <input type="checkbox" value={tag.id} {...register(`tags`)} />
                          {tag.label}
                        </label>
                    ))}
                     </div> 
                    <button className="button-new-ad" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};



export default NewAd;
