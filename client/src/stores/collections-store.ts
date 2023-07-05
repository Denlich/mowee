import { create } from "zustand";
import Collection from "../entities/Collection";

interface CollectionStore {
  collections: Collection[];
  setCollections: (collections: Collection[]) => void;
  addCollection: (collection: Collection) => void;
  deleteCollection: (_id: string) => void;
}

const useCollectionsStore = create<CollectionStore>((set) => ({
  collections: [],
  setCollections: (collections) => set(() => ({ collections: collections })),
  addCollection: (collection) =>
    set((store) => ({ collections: [...store.collections, collection] })),
  deleteCollection: (_id) =>
    set((store) => ({
      collections: store.collections.filter((c) => c._id !== _id),
    })),
}));

export default useCollectionsStore;
