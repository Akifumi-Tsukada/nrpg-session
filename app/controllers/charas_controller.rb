class CharasController < ApplicationController
  before_action :set_chara, only: [:show, :edit, :update, :destroy]
  before_action :set_room

  def index
  end

  def show
    @chara = Chara.new
    @charas = @room.charas
  end

  def new
    @chara = Chara.new
  end

  def create
    @chara = Chara.new(chara_params)
    if @chara.save
      redirect_to room_messages_path(@room)
    else
      render :new
    end
  end

  def destroy
    @chara = Chara.find(params[:id])
    @chara.destroy
    redirect_to :room
  end

  private

  def set_chara
    @chara = Chara.find(params[:id])
  end

  def set_room
    @room = Room.find(params[:room_id])
  end

  def chara_params
    params.require(:chara).permit(:name, :job, :magic, :hitpoint, :attack, :defence, :escape, :image).merge(user_id: current_user.id, room_id: params[:room_id])
  end
  
end
