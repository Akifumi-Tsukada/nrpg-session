Rails.application.routes.draw do
  devise_for :users
  get "rooms/index"
  root to: 'toppage#index'
  resources :users, only: [:edit, :update]
  resources :rooms, only: [:new, :create, :destroy] do
    resources :charas, only: [:new, :create, :destroy]
    resources :messages, only: [:index, :create]
  end
end